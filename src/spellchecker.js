import React, { useState } from 'react';

function SpellChecker() {
  const [word, setWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5002/checkSpelling', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ word })
    }).then(response => response.json())
    .then(data => {
        setIsCorrect(data.isCorrect);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a word to check its spelling:
          <input type="text" value={word} onChange={(event) => setWord(event.target.value)} />
        </label>
        <button type="submit">Check Spelling</button>
      </form>
      {isCorrect !== null && (
        <div>
          {isCorrect ? (
            <p>The word "{word}" is likely spelled correctly.</p>
          ) : (
            <p>The word "{word}" is likely misspelled.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SpellChecker;





// import React, { useState } from 'react';

// function SpellChecker() {
//   const [word, setWord] = useState('');
//   const [isCorrect, setIsCorrect] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://localhost:5002/checkSpelling', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ word })
//     }).then(response => response.json())
//     .then(data => {
//         console.log(data.message);
//         setIsCorrect(data.message === "bazinga");
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter a word to check its spelling:
//           <input type="text" value={word} onChange={(event) => setWord(event.target.value)} />
//         </label>
//         <button type="submit">Check Spelling</button>
//       </form>
//       {isCorrect !== null && (
//         <div>
//           {isCorrect ? (
//             <p>Bazinga!</p>

//           ) : (
//             <p>The word "{word}" is likely misspelled.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SpellChecker;
