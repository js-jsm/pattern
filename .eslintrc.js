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
            "error", // 0:pass 1:warning 2: error
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error", // 이걸 무시하는 옵션으로 변경해야 템플릿 리터럴이 필터링되지않음
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
