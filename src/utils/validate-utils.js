export function checkEmail(value) {
  return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
    value
  );
}
export function checkPhone(value) {
  return /^1(3[0-9]|4[5,7]|5[0-9]|6[2,5-7]|7[0-1,7-8]|8[0-9]|9[1,8-9])\d{8}$/.test(
    value
  );
}

export function checkStudentNo(value) {
  return /^211[0-9]{6}$/.test(value);
}

export function checkUsername(value) {
  return !(undefined === value || null === value || value.length < 6);
}
