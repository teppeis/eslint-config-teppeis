// This test checks that eslint-plugin-node is effective.
// This should be failed because TextDecoder is not available in Node v10.
new TextDecoder("shift_jis");
