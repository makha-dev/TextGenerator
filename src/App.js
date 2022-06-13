import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [numOfParagraphs, setNumOfParagraphs] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let num = parseInt(numOfParagraphs);
    if(num < 2)
      num = 1;
    else 
      num = Math.min(8, num);
    setParagraphs(data.slice(0, num));
  }
  

  return (
    <div className='section-center'>
      <h3 className='title'>Tired Of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input type="number" name="amount" id="amount" value={numOfParagraphs}
        onChange={(e) => 
          setNumOfParagraphs(e.target.value)
        }/>
        <button className='btn'>generate</button>
      </form>
      <article className="lorem-text">
        {
          
          paragraphs.map((paragraph, index) => {
            return (
              <p key={index}>
                {paragraph}
              </p>
            );
          })
        }
      </article>
    </div>
  );
}

export default App;
