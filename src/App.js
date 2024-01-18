import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let days = "2월 17일 발행"

  return (
    <div className="App">
      <header className="App-header">
      <div className="blogName">
        <div className='counter'>React Blog</div>
      </div>

      <div className="list">
        <h4> {글제목[0]}

        <button onClick={() => {
        let count = [...글제목];
        count.sort();
        글제목변경(count);
       }}>가나다순 정렬</button> </h4> 

        <span onClick={() => {따봉변경(따봉+1)}}> ❤️</span> {따봉}

        <p> {days} </p>
      </div>
      
      <div className="list">
        <h4> {글제목[1]} </h4>
        <p> {days} </p>
      </div>

      <div className="list">
        <h4> {글제목[2]} </h4>
        <p> {days} </p>
      </div>

      </header>
    </div>
  );
}

export default App;