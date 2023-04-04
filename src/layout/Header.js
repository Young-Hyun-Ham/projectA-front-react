import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import config from '../config';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayUserInfo, setDisplayUserInfo] = useState(false);
  const [displayLogout, setDisplayLogout] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    // 페이지 로드 시 로컬 스토리지에서 인증 토큰 정보 확인
    let token = localStorage.getItem("access_token");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let sessionYN = urlParams.get("sessionYN");

    if (token) {
      // 토큰 만료 시간 확인
      if (isTokenExpired()) {
        // 만료되었다면 리프레시 토큰을 이용하여 새로운 인증 토큰 발급
        refreshAccessToken();
      } else {
        // 유저 ID
        document.getElementById("userLoginId").textContent = jwtDecode(token).sub;
        
        // 만료되지 않았다면 로컬 스토리지에서 인증 토큰 정보 추출하여 화면에 출력
        setDisplayLogin(false);
        setDisplayUserInfo(true);
        setDisplayLogout(true);
      }
    } else {
      if (sessionYN == "Y") {
        alert("로그인을 하시기 바랍니다.");
        //location.href = "/login";
        navigate('/login');
      }
    }
  };

  const isTokenExpired = () => {
    // 로컬 스토리지에서 토큰 만료 시간 정보 가져오기
    let exp = localStorage.getItem("access_token_exp");
  
    if (!exp) {
      return true;
    }
  
    // 토큰 만료 시간 정보가 UNIX 타임스탬프로 저장되어 있으므로, 현재 시간과 비교하기 위해 밀리초 단위로 변환
    let now = new Date().getTime();
    let expTime = new Date(exp * 1000).getTime();
  
    // 토큰 만료 시간이 지났으면 true 반환, 그렇지 않으면 false 반환
    return now >= expTime;
  };

  const refreshAccessToken = () => {
    fetch(`${config.API_URL}/refresh_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "refresh_token=" + encodeURIComponent(localStorage.getItem("refresh_token"))
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("새로운 인증 토큰 발급 중 에러가 발생하였습니다.");
    })
    .then(data => {
      let token = data.access_token;
  
      // 로컬 스토리지에 새로운 인증 토큰 저장
      localStorage.setItem("access_token", token);
  
      // 토큰 만료 시간 정보 추출하여 로컬 스토리지에 저장
      let decodedToken = jwtDecode(token);
      let exp = decodedToken.exp;
      localStorage.setItem("access_token_exp", exp);
  
      document.getElementById("token").value = token;
    })
    .catch(error => {
      alert(error.message);
    });
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.setItem("access_token", "");

    navigate('/login');
  }

  return (
    <header id="header">
      <h1>나만의공간</h1>
      <nav className="navbar navbar-expand-md navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="#" className="nav-link">뉴스</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">메일</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">카페</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">블로그</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">쇼핑</Link>
            </li>
            <li className="nav-item">
              <Link to="/fortune" className="nav-link">운세보기</Link>
            </li>
            <li className="nav-item" id="loginMenuItem" style={{ display: displayLogin ? 'block' : 'none' }}>
              <Link to="/login" className="nav-link">로그인</Link>
            </li>
            <li className="nav-item" id="userInfoMenuItem" style={{ display: displayUserInfo ? 'block' : 'none' }}>
              <span id="userLoginId">admin</span> 님 안녕하세요.
            </li>
            <li className="nav-item" id="logoutMenuItem" style={{ display: displayLogout ? 'block' : 'none' }}>
              <a href="#" onClick={logout} className="nav-link" style={{ cursor: 'pointer'}}>로그아웃</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
