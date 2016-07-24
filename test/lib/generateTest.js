'use strict';

const assert = require('assert');

function formatMessages(messages) {
  return messages.map(message =>
    `${message.line}:${message.column} ${message.message.slice(0, -1)} - ${message.ruleId}`);
}

function generateTest(result) {
  const filePath = result.filePath;
  const messages = result.messages;

  const match = /([^.]*)\.(off|warn|error)\.js$/.exec(filePath);
  if (!match) {
    throw new Error(`Invalid filePath: ${filePath}`);
  }
  const rule = match[1];
  const expected = match[2];

  it(`${rule}: ${expected}`, () => {
    if (expected === 'off') {
      if (messages.length > 0) {
        assert.fail(messages.length, 0, formatMessages(messages).join('\n'));
      }
    } else if (expected === 'error') {
      if (!messages.filter(m => m.ruleId === rule).length) {
        let msg = [`${rule} error is expected, but actually passed.`];
        msg = msg.concat(formatMessages(messages));
        assert.fail(null, null, msg.join('\n'));
      }
    }
  });
}

module.exports = generateTest;
