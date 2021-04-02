import { storage } from "store/storage";

const TokenKey = "token";

export function getToken() {
  return storage.getLocal(TokenKey);
}

export function setToken(token) {
  return storage.setLocal(TokenKey, token);
}

export function removeToken() {
  return storage.clearOneLocal(TokenKey);
}
