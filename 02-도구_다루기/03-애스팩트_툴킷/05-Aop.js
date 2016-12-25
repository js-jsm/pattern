const Aop5 = {
  around(fnName, advice, fnObj) {
    const originalFn = fnObj[fnName];
    fnObj[fnName] = function(...args) {
      return advice.call(this, {fn: originalFn, args});
    };
  }
};