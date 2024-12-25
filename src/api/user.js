import request from "@/utils/request";

// 用户登录
export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data, // 包含用户名和密码的对象
  });
}

// 用户注册
export function register(data) {
  return request({
    url: "/register",
    method: "post",
    data, // 包含用户名、邮箱和密码的对象
  });
}

// 用户注销
export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}
