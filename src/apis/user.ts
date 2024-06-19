import axios from "axios";

export async function login(email: string, password: string) {
  try {
    const resp = await axios.post(`http://52.78.236.23:3000/api/users/login`, {
      email: email,
      password: password,
    });
    return resp;
  } catch (e: any) {
    throw new Error(e.response.data);
  }
}

export async function signup(name: string, email: string, password: string) {
  try {
    const resp = await axios.post("http://52.78.236.23:3000/api/users/signup", {
      username: name, // 서버에서 username 필드로 사용하므로 이름을 username으로 전달합니다.
      email: email,
      password: password,
    });
    return resp;
  } catch (e: any) {
    throw new Error(e.response.data.message); // 서버에서 에러 메시지를 반환하도록 설정했으므로, 에러 메시지를 던집니다.
  }
}
