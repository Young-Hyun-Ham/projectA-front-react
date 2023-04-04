import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      {/* ===== 광고 베너 section start ===== */}
      <section>
        <div className="kakao-ad">
          <ins className="kakao_ad_area" style={{display: 'block'}} data-ad-unit="DAN-MQls1Izs0KOemwpQ" data-ad-width="320" data-ad-height="100"></ins>
          <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
        </div>
      </section>
      {/* ===== 광고 베너 section end ======= */}
      <div style={{backgroundColor: '#f2f2f2', padding: '20px'}}>
        <ul style={{display: 'flex', justifyContent: 'space-around', listStyleType: 'none', margin: '0', padding: '0'}}>
          <li>회사소개</li>
          <li>채용정보</li>
          <li>제휴안내</li>
          <li>광고안내</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
        </ul>
        </div><div style={{textAlign: 'center', padding: '20px'}}>
        <p>나만의공간 &copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
