// This test checks that eslint-plugin-node is effective.
// This should be failed because URL is not available in Node v8.
new URL("https://example.com");
