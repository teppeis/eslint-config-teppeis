import { Linter } from "eslint";
import prettierConfig from "eslint-config-prettier";
import { globSync } from "glob";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import es2021 from "../lib/configs/es2021.mjs";
import es2022 from "../lib/configs/es2022.mjs";
import es2023 from "../lib/configs/es2023.mjs";
import typescriptTypeChecked from "../lib/configs/typescript-type-checked.mjs";
import typescript from "../lib/configs/typescript.mjs";
import { merge } from "../lib/merge.mjs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

describe("es2021 config", () => {
  testConfig(es2021, "es2021");
});

describe("es2022 config", () => {
  testConfig(es2022, "es2022");
});

describe("es2023 config", () => {
  testConfig(es2022, "es2022");

  it("should not enable rules that are overridden by prettier", () => {
    const es2023rules = new Set(Object.keys(es2023.rules));
    const commonRules = Object.keys(prettierConfig.rules).filter(
      (rule) => es2023rules.has(rule) && isEnabledRule(es2023.rules[rule]),
    );
    assert.deepEqual(commonRules, []);
  });
});

describe("typescript config", () => {
  testConfig(typescript, "typescript");
  // TODO: organize test cases
  // - moduleBase
  // - @typescript-eslint:eslint-recommended
  // - @typescript-eslint:recommended
  // - custom rules
  // - plugins:import
  // - plugins:jsdoc

  it("should not enable rules that are overridden by prettier", () => {
    const tsRules = new Set(Object.keys(typescript.rules));
    const commonRules = Object.keys(prettierConfig.rules).filter(
      (rule) => tsRules.has(rule) && isEnabledRule(typescript.rules[rule]),
    );
    assert.deepEqual(commonRules, []);
  });
});

describe("typescript-type-checked config", () => {
  const config = merge(typescriptTypeChecked, {
    languageOptions: {
      parserOptions: {
        project: `${__dirname}fixtures/typescript-type-checked.tsconfig.json`,
        tsconfigRootDir: `${__dirname}fixtures`,
      },
    },
  });
  testConfig(config, "typescript-type-checked");

  it("should not enable rules that are overridden by prettier", () => {
    const tsRules = new Set(Object.keys(typescriptTypeChecked.rules));
    const commonRules = Object.keys(prettierConfig.rules).filter(
      (rule) => tsRules.has(rule) && isEnabledRule(typescriptTypeChecked.rules[rule]),
    );
    assert.deepEqual(commonRules, []);
  });
});

/**
 * @param {*} ruleLevel 0/1/2/"off"/"warn"/"error" or [0, ]
 * @return {boolean}
 */
function isEnabledRule(ruleLevel) {
  assert(ruleLevel != null);
  const level = Array.isArray(ruleLevel) ? ruleLevel[0] : ruleLevel;
  if (level === 0 || level === "off") {
    return false;
  } else if (level === 1 || level === 2 || level === "warn" || level === "error") {
    return true;
  } else {
    throw new TypeError(`Unexpected rule level: ${ruleLevel}`);
  }
}

/**
 * @param {import("eslint").Linter.FlatConfig} config
 * @param {string} configName
 */
function testConfig(config, configName) {
  const fixtures = globSync(`${__dirname}/fixtures/${configName}.*.@(js|ts)`).sort();
  for (const fixture of fixtures) {
    testFile(fixture, config);
  }
}

/**
 * @param {string} filePath
 * @param {import("eslint").Linter.FlatConfig} config
 */
async function testFile(filePath, config) {
  const match = /([^.]*)\.(pass|fail)\.(?:js|ts)$/.exec(filePath);
  if (!match) {
    throw new Error(`Invalid filePath: ${filePath}`);
  }
  // Support rules from plugins
  const ruleAndTestCase = match[1].split("%");
  const rule = ruleAndTestCase[0].replaceAll("#", "/");
  const testCase = ruleAndTestCase[1];
  const expected = match[2];

  it(`${rule}${testCase ? ` (${testCase})` : ""}: ${expected}`, async () => {
    const messages = await verify(filePath, config);
    const fatals = messages.filter((msg) => !!msg.fatal);
    if (fatals.length) {
      fatals.forEach((fatal) => {
        console.error(`${filePath}:${fatal.line}:${fatal.column} ${fatal.message}`);
      });
      throw new Error("Fatal error");
    }

    const messagesForTheRule = messages.filter((msg) => msg.ruleId === rule);
    if (expected === "pass" && messagesForTheRule.length > 0) {
      assert.fail(formatMessages(messagesForTheRule).join("\n"));
    } else if (expected === "fail" && messagesForTheRule.length === 0) {
      if (messages.length > 0) {
        assert.fail(
          `Passed the rule unexpectedly and failed other rules:\n${formatMessages(messages).join(
            "\n",
          )}`,
        );
      } else {
        assert.fail("Passed the rule unexpectedly.");
      }
    }
  });
}

/**
 * @param {string} file
 * @param {import("eslint").Linter.FlatConfig} config
 */
async function verify(file, config) {
  const linter = new Linter({ configType: "flat" });
  const code = await readFile(file, "utf8");
  return linter.verify(code, [config], path.basename(file));
}

/**
 * @param {import('eslint').Linter.LintMessage[]} messages
 */
function formatMessages(messages) {
  return messages.map(
    (msg) => `${msg.line}:${msg.column} ${msg.message.slice(0, -1)} - ${msg.ruleId}`,
  );
}
