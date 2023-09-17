import { Linter } from "eslint";
import { globSync } from "glob";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

testConfig("es2021");
// testConfig("+prettier", false, "fixtures/.prettier.eslintrc.json");
// testConfig("typescript", true, "fixtures/.typescript.eslintrc.json");
// testConfig("typescript-with-type", true, "fixtures/.typescript-with-type.eslintrc.json");

/**
 * @param {string} configName
 */
function testConfig(configName) {
  describe(configName, async () => {
    const fixtures = globSync(`${__dirname}/fixtures/${configName}.*.@(js|ts)`).sort();
    for (const fixture of fixtures) {
      testFile(fixture, configName);
    }
  });
}

/**
 * @param {string} filePath
 * @param {string} configName
 */
function testFile(filePath, configName) {
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
    const messages = await verify(filePath, configName);

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
 * @param {string} configName
 */
async function verify(file, configName) {
  const linter = new Linter({ configType: "flat" });
  const code = await readFile(file, "utf8");
  const config = (await import(`../lib/configs/${configName}.mjs`)).default;
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
