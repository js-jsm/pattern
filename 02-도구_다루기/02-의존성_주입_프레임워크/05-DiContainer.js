class DiContainer5 {
  constructor() {
    this.registrations = [];
  }
  register(name, dependencies, func) {
    let ix;
    if(typeof name !== "string" || !Array.isArray(dependencies) || typeof func !== "function") {
      throw new Error(this.messages.registerRequiresArgs);
    }
    for(ix=0; ix<dependencies.length; ix++) {
      if(typeof dependencies[ix] !== "string") {
        throw new Error(this.messages.registerRequiresArgs);
      }
    }
    this.registrations[name] = {func};
  }
  get(name) {
    const registration = this.registrations[name];
    if(registration === undefined) return undefined;
    return registration.func();
  }
}

DiContainer5.prototype.messages = {
  registerRequiresArgs: `이 생성자 함수는 인자가 3개 있어야 합니다: 문자열, 문자열 배열, 함수`
};