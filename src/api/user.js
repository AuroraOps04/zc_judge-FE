import Api from "./index";

export function login(data) {
  return Api.post("/login", data);
}

export function getInfo() {
  return Api.get("/user/info");
}

export function register(data) {
  return Api.post("/register", data);
}

export function verifyAccountExists(data) {
  return Api.post("/verifyAccountExists", data);
}
