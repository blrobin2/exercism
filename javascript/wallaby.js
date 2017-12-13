module.exports = function (wallaby) {
  return {
    files: [
      '**/*.js',
      "!**/*.spec.js"
    ],
    tests: [
      '**/*.spec.js'
    ],
    testFramework: "jasmine",
    env: {
      "type": "node"
    }
  };
};