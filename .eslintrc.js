module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jasmine": true
    },
    "extends": ["eslint:recommended", "plugin:jasmine/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'jasmine'
    ],
    "rules": {
        "indent": [
            0,
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            0,
            "single"
        ],
        "semi": [
            0,
            "always"
        ]
    }
};