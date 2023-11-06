import InputPanel from './components/inputPanel/InputPanel';
import OutputPanel from './components/outputPanel/OutputPanel';

import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [data, setData] = useState('')


  const updateData = (newData) => {
    setData(newData)
  }

  useEffect(() => {
    setData(`<h1>Це заголовок H1</h1>
    <h2>Це підзаголовок H2</h2>
    <a href="https://www.example.com">Текст посилання</a>
    <code>Це інлайн-код</code>
    <pre>
      <code>
        // Це блок коду
        function helloWorld() {
          console.log('Hello, world!');
        }
      </code>
    </pre>
    <ul>
      <li>Перший пункт списку</li>
      <li>Другий пункт списку</li>
      <li>Третій пункт списку</li>
    </ul>
    <blockquote>
      Це блок цитати. Тут ви можете цитувати текст або вміщувати інший контент.
    </blockquote>
    <img src="шлях_до_зображення.jpg" alt="Опис зображення">
    <p><strong>Це полужирний текст</strong></p>`)
  }, [])




  return (
    <div className="App">
      <InputPanel updateData={updateData} data={data}/>
      <OutputPanel data={data} d />
    </div>
  );
}

export default App;
