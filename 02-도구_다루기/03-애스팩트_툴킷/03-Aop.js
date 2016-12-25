const Aop3 = {
  around(fnName, advice, fnObj) {
    const originalFn = fnObj[fnName];
    fnObj[fnName] = (...args) => {
      const targetContetxt = {}; // 잘못된 코드라는 건 알고 있다. 나중에 다시 설명한다.
      advice.call(targetContetxt, {fn: originalFn, args});
    };
  }
};