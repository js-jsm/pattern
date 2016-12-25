const Aop = {
  around(fnName, advice, fnObj) {
    fnObj[fnName] = advice;
  }
};