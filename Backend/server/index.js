const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const spawn = require("child_process").spawn;
const fs = require("fs");

const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      if (file.fieldname === 'file') {
        cb(null, 'export.csv'); // nom de fichier pour le fichier csv
      } else if (file.fieldname === 'png') {
        cb(null, 'font.png'); // nom de fichier pour le fichier png
      }
    },
    encoding: (req, file, cb) => {
      if (file.mimetype === 'image/png') {
        cb(null, 'binary');
      } else {
        cb(null, 'utf-8');
      }
    }
  });
  
const upload = multer({ storage });

const allowedOrigins = ['http://localhost:3000', 'http://localhost:8000'];
app.use(cors({ 
  origin: function(origin, callback) {
    // Vérifier si l'origine de la demande est autorisée
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1) {
      var msg = "L'accès depuis cette origine n'est pas autorisé";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.post('/api/upload',  upload.fields([{ name: 'file', maxCount: 1 }, { name: 'png', maxCount: 1 }]), (req, res) => {
  try{
    // check if uploads folder exists
    if (!fs.existsSync("uploads")) {
      console.log("uploads folder not created");
      fs.mkdirSync("uploads");
    }

    //const file = req.file;

    //const filePath = path.join(__dirname, 'uploads', file.filename);

    const process = spawn("node", ["server/SlimScript.js"]);
    process.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });
    
    process.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });
    
    process.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
    res.send({ code:200, type:"Process succeded, data ready to be use"});

  } catch (err) {
    res.send({ code: 400, type: "on save file or on SlimScript" });

  }
});

app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../results/ece.json'));
});

app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});