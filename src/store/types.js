const keyMirror = obj => {
  let _obj = {};
  if (obj instanceof Object) {
    _obj = Object.assign(_obj, obj);
    const keyArray = Object.keys(obj);
    keyArray.forEach(key => {
      _obj[key] = key;
    });
  }
  return _obj;
};

export default keyMirror({
  CHANGE_PROFILE: null
});
