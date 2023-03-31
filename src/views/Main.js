import React from 'react';
import '@public';

const Main = () => {
  return (
    <div>
      {/* Header */}
      <header id="header">
        <h1>나만의공간</h1>
        <nav class="navbar navbar-expand-md navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">뉴스</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">메일</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">카페</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">블로그</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">쇼핑</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ai/fortuneAI.html">운세보기</a>
              </li>
              <li class="nav-item" id="loginMenuItem">
                <a class="nav-link" href="/login.html">로그인</a>
              </li>
              <li class="nav-item" id="userInfoMenuItem">
                <span>함영현</span> 님 안녕하세요.
              </li>
              <li class="nav-item" id="logoutMenuItem">
                <a class="nav-link" href="#">로그아웃</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* Main */}
      <main id="body">
        <section className="container">
          {/* Popular Content */}
          // ... rest of the code goes here
        </section>
        <section className="container">
          {/* Recommended Services */}
          // ... rest of the code goes here
        </section>
      </main>
      {/* Ad Banner */}
      // ... rest of the code goes here
      {/* Footer */}
      // ... rest of the code goes here
    </div>
  );
};

export default Main;
