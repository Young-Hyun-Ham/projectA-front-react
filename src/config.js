const API_URL = "http://ec2-3-38-208-217.ap-northeast-2.compute.amazonaws.com:8000";
// 페이지 로드 시 로컬 스토리지에서 인증 토큰 정보 확인
let ACCESS_TOKEN = localStorage.getItem("access_token");
export default {
  API_URL, ACCESS_TOKEN
};
