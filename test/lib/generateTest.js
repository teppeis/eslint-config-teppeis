'use strict';

const assert = require('assert');
const path = require('path');

function formatMessages(messages) {
  return messages.map(
    message =>
      `${message.line}:${message.column} ${message.message.slice(0, -1)} - ${message.ruleId}`
  );
}

function generateTest(result) {
  const filePath = path.basename(result.filePath);
  const messages = result.messages;
  const fatals = messages.filter(_ => !!_.fatal);
  if (fatals.length) {
    fatals.forEach(fatal => {
      console.error(`${filePath}:${fatal.line}:${fatal.column} ${fatal.message}`);
    });
    throw new Error(`Fatal error`);
  }

  const match = /([^.]*)\.(off|warn|error)\.js$/.exec(filePath);
  if (!match) {
    throw new Error(`Invalid filePath: ${filePath}`);
  }
  // Support rules from plugins
  const ruleAndTestCase = match[1].split('%');
  const rule = ruleAndTestCase[0].replace('#', '/');
  const testCase = ruleAndTestCase[1];
  const expected = match[2];

  it(`${rule}${testCase ? ` (${testCase})` : ''}: ${expected}`, () => {
    const messagesForTheRule = messages.filter(m => m.ruleId === rule);
    if (expected === 'off' && messagesForTheRule.length > 0) {
      assert.fail(null, null, formatMessages(messagesForTheRule).join('\n'));
    } else if (expected === 'error' && messagesForTheRule.length === 0) {
      if (messages.length > 0) {
        assert.fail(null, null, `${rule} passed, but: \n${formatMessages(messages).join('\n')}`);
      } else {
        assert.fail(null, null, 'No errors despite your expectation');
      }
    }
  });
}

module.exports = generateTest;
