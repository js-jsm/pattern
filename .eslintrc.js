module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
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
