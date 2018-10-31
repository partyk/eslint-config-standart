module.exports = {
    "extends": "standard",
    "env": {
        "browser": true,
        "jquery": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "allowImportExportEverywhere": true
        "ecmaFeatures": {
          "spread": true
        }
    },
    "rules": {
        "indent": [2, 4, { "SwitchCase": 1 }],
        "semi": [2, "always", { "omitLastInOneLineBlock": true }],
        "quotes": [2, "single", { "allowTemplateLiterals": true }],
        "object-curly-spacing": [2, "never", { "objectsInObjects": true }],
        "eol-last": 0,
        "spaced-comment": 1,
        "no-new": 0,
        "space-before-function-paren": [2, {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }]
    }
};