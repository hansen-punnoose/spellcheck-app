
const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/checkSpelling', (req, res) => {
    const word = req.body.word;
    const spellChecker = spawn(path.join(__dirname, 'backend', 'spellcheckexe'), [word], { cwd: __dirname });  
    let output = '';
    let error = '';
    spellChecker.stdout.on('data', data => {
      output += data.toString();
    });
    spellChecker.stderr.on('data', data => {
      error += data.toString();
    });
    spellChecker.on('close', code => {
     // console.log('Output:', output); // Add this line to log the output
      //console.log('Error:', error); // Add this line to log the error
      if (error) {
        console.error(`An error occurred while checking spelling: ${error}`);
        return res.status(500).send('An error occurred');
      }
      const isCorrect = JSON.parse(output).isCorrect;
      res.send({ isCorrect: isCorrect });
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

// const express = require('express');
// const { spawn } = require('child_process');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 5002;

// app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.post('/checkSpelling', (req, res) => {
//     const word = req.body.word;
//     const spellChecker = spawn(path.join(__dirname, 'backend', 'spellcheckexe'), [word], { cwd: __dirname });  
//     let output = '';
//     let error = '';
//     spellChecker.stdout.on('data', data => {
//       output += data.toString();
//     });
//     spellChecker.stderr.on('data', data => {
//       error += data.toString();
//     });
//     spellChecker.on('close', code => {
//       if (error) {
//         console.error(`An error occurred while checking spelling: ${error}`);
//         return res.status(500).send('An error occurred');
//       }
//       const message = JSON.parse(output).message;
//       res.send({ message: message });
//     });
//   });

// app.listen(port, () => console.log(`Server running on port ${port}`));

