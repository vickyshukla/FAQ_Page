import { useState } from 'react';
import './App.css';
import SignQuestions from './Question_List';
import data from './data';

function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <div className='container'>
      <h3>Questions realated to Web Developements</h3>
      <section className='info'>
        {
          questions.map((questions)=>{
            return <SignQuestions key={questions.id} {...questions}/>
          })
        }
      </section>
    </div>
  </main>
}

export default App;
