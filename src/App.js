// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import SpellChecker from './spellchecker.js';
import BloomFilterExplanation from './bloomfilterexplanation.js';
import Implementation from './Implementation';

import './App.css'


function App() {
  return (
    <div>
     <div className="centered-container">
        <h1>Spell Check via Bloom Filter</h1>
        <SpellChecker />
        <p> inputs are checked against <a href="https://github.com/dwyl/english-words/blob/master/words_alpha.txt" target="_blank" rel="noopener noreferrer">github.com/dwyl/english-words</a>.</p>
        <BloomFilterExplanation />
        <Implementation/>
      </div>
      </div>
    
  );
}

export default App;
