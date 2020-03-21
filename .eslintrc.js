module.exports = {
    "extends": "airbnb-base",
    "env": {
      "node": true,
      "mocha": true
    },
    "plugins": [ "mocha" ],
    "rules": {
      "func-names": "off",
      "import/no-extraneous-dependencies": "off"
    },
    "overrides": [{
      "files": ["test/**/*.js"],
      "rules": {
        "prefer-arrow-callback": "off"
      },
    }]
  };
