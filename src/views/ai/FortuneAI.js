import React, {useState, useRef} from 'react';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FortuneAI = () => {
  const inputRef = useRef();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFortuneInfo, setShowFortuneInfo] = useState(true);
  const [showChat, setShowChat] = useState(false);

  let userMessages = [];
  let assistantMessages = [];
  let myDateTime = ''

  const spinner = () => {
      setLoading(true);
      sendMessage();
  }

  const start = () => {
      const date = document.getElementById('date').value;
      const hour = document.getElementById('hour').value;
      if (date === '') {
          alert('생년월일을 입력해주세요.');
          return;
      }
      myDateTime = date + hour;
      
      setMessages([...messages, { type: 'assistant', text: "무엇이 알고싶은가?", goBack: true }]);
      setShowFortuneInfo(false);
      setShowChat(true);
  }

  const goBack = () => {
    setMessages([]);
    setShowFortuneInfo(true);
    setShowChat(false);
  }

  const sendMessage = async () => {
    const chatInput = inputRef.current;

    messages.push({ type: 'user', text: chatInput.value });
    //userMessages 메세지 추가
    userMessages.push(chatInput.value);
    chatInput.value = '';

    setLoading(true);
    try {
      const response = await fetch('https://nj052sxp9c.execute-api.ap-northeast-2.amazonaws.com/prod/fortuneTell', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              myDateTime: myDateTime,
              userMessages: userMessages,
              assistantMessages: assistantMessages,
          })
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setLoading(false);

      setMessages([...messages, { type: 'assistant', text: data.assistant, add_banner: true }]);
      //assistantMessage 메세지 추가
      assistantMessages.push(data.assistant);
    } catch(error) {
      setLoading(false);
      console.error('Error with fetch request:', error.message);
      alert('There was an error with the fetch request. Please check the console for more information.');
    }
  };
  
  return (
    <div>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }
        
        .chat-container {
          width: 400px;
          min-width: 300px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .chat-box {
          background-color: #f2f2f2;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 20px;
          overflow-y: scroll;
          height: 500px;
        }
        
        .chat-message {
          background-color: #fff;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 10px;
          text-align: left;
        }
        
        .chat-message p {
          margin: 0;
          padding: 0;
        }
        
        .chat-input {
          display: flex;
          margin-top: 20px;
        }
        
        .chat-input input {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 5px;
          margin-right: 10px;
        }
        
        .chat-input button {
          background-color: #4CAF50;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .chat-input button:hover {
          background-color: #3e8e41;
        }
        
        .assistant {
          color: blue;
        }
        
        .intro-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .intro-container img{
          width: 370px;
          min-width: 300px;
        }
        
        #loader {
          font-size: 25px;
          text-align: center;
        }
        
        .leaflet-link {
          border: 2px solid #007bff;
          border-radius: 5px;
          display: inline-block;
          padding: 5px;
          text-decoration: none;
          color: #007bff;
        }
        
        .leaflet-link:hover {
          background-color: #007bff;
          color: white;
        }
        
        .form-container {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
        }
        
        h2 {
          margin-bottom: 1rem;
        }
        
        .form-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
        }
        
        .form-label {
          display: block;
          text-align: center;
        }
        
        .form-control,
        .form-select {
          display: block;
          margin: 0 auto;
          width: 100%;
        }
        
        .mb-3 {
          text-align: center;
        }
        
        /* 바탕색 지정 */
        main {
          background-color: #2b2d42;
        }
        
        #fortuneInfo .form-container {
          width: 35%;
          background-color: #2f2e40;
        }
        
        #intro h1,
        .form-label {
          color: #F5B041;
        }
        
        .form-control,
        .form-select,
        .form-button {
          background-color: #433d3c;
          color: white;
        }        
        `}
      </style>
      <Header />
      <main>
        <section className="container">
          <div id="intro" className="intro-container">
              <h1>운세를 알려드립니다.</h1>
              {showFortuneInfo && (
              <div id="fortuneInfo">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src="/img/cats.png" alt="chatdoge" />
                <div className="form-container" style={{width: '100%'}}>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">생년월일</label>
                      <input id="date" type="date" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="hour" className="form-label">태어난시간</label>
                      <select id="hour" name="hour" className="form-select">
                        <option value="">모름</option>
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <button type="button" style={{width:'100%'}} className="form-button" onClick={start}>오늘의 운세보기</button>
                    </div>
                  </form>
                </div>
                </div>
              </div>
              )}
              {showChat && (
                <div id="chat" className="chat-container">
                  <div className="chat-box">
                    {messages.map((message, index) => (
                      <div key={index} className={`chat-message ${message.type}`}>
                        <p>
                          {message.text}
                          {message.goBack && (
                            <span onClick={goBack} style={{float: 'right', color: 'bule', cursor: 'pointer'}}>[ 다시입력 ]</span>
                          )}
                        </p>
                        {message.add_banner && (
                          <p style={{color: '#bd2130'}}>
                            추가로 링크를 눌러 작은 정성 배풀어주시면 더욱 좋은 운이 있으실겁니다. [ <a href='https://toss.me/hyh8414'>복채 보내기</a> ]
                          </p> 
                        )}
                      </div>
                    ))}
                  </div>
                  {loading && (
                    <div id="loader" className="loader">
                      <i className="fa fa-spinner fa-spin" style={{fontSize: '12px', color: 'white'}}></i>
                    </div>
                  )}
                  <div className="chat-input">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Type your message here..."
                    />
                    <button id="btn" onClick={spinner}>
                      Send
                    </button>
                  </div>
                </div>
              )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FortuneAI;

