import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import config from '../config';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    fetch(`${config.API_URL}/api/v1/login/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, userPwd }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('An error occurred while logging in');
      })
      .then((data) => {
        setToken(data.access_token);

        if (data.refresh_token) {
          // Save the refresh token to local storage
          localStorage.setItem('refresh_token', data.refresh_token);
        }

        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setToken = (token, expiresIn) => {
    // 로컬 스토리지에 인증 토큰 저장
    localStorage.setItem("access_token", token);

    // 토큰 만료 시간 정보 추출하여 로컬 스토리지에 저장
    let decodedToken = jwtDecode(token);
    let exp = decodedToken.exp;
    //console.log("exp======>",exp);
    localStorage.setItem("access_token_exp", exp);
  }

  return (
    <div>
      <Header />
      <main>
        <section className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <h4>로그인</h4>
                </div>
                <div className="card-body">
                  <form id="login-form" method="POST">
                    <div className="form-group">
                      <label htmlFor="id">아이디:</label>
                      <input
                        type="id"
                        className="form-control"
                        id="userId"
                        placeholder="아이디를 입력하세요"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">비밀번호:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="userPwd"
                        placeholder="비밀번호를 입력하세요"
                        value={userPwd}
                        onChange={(e) => setUserPwd(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="button"
                      id="loginBtn"
                      className="btn btn-primary btn-block"
                      onClick={handleLogin}
                    >
                      로그인
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            {/* bottom 여백 */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
