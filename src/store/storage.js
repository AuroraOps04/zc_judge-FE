export const storage = {
  setLocal: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  getLocal: key => {
    let value = window.localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  },
  clearOneLocal: key => {
    window.localStorage.removeItem(key);
  },
  clearAllLocal: () => {
    window.localStorage.clear();
  },
  setSession: (key, value) => {
    //正常设置，会覆盖原值
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  appendSession: (key, value) => {
    //追加赋值，不会覆盖原值
    if (window.sessionStorage.getItem(key)) {
      let oldValue = JSON.parse(window.sessionStorage.getItem(key));
      let newValue = Object.assign(oldValue, value);
      window.sessionStorage.setItem(key, JSON.stringify(newValue));
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  getSession: key => {
    //需要判断取值格式，如果是string或者undefined，不能JSON.PARSE()
    let value = window.sessionStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  },
  clearOneSession: key => {
    window.sessionStorage.removeItem(key);
  },
  clearAllSession: () => {
    window.sessionStorage.clear();
  }
};
