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
    const messageForTheRule = messages.filter(m => m.ruleId === rule)[0];
    if (expected === 'off' && messageForTheRule) {
      assert.fail(null, null, formatMessages(messages).join('\n'));
    } else if (expected === 'error' && !messageForTheRule) {
      if (messages.length > 0) {
        assert.fail(null, null, formatMessages(messages).join('\n'));
      } else {
        assert.fail(null, null, 'No errors despite your expectation');
      }
    }
  });
}

module.exports = generateTest;
