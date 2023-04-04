const fs = require("fs");

fs.readFile("data.json", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);
  jsonData.forEach((obj) => {
    const hash = obj.hash;
    const NINE = obj.NINE;

    console.log("hash:", hash);
    console.log("NINE:", NINE);
      // Envoi des propriétés à un contrat intelligent avec "hash" et "NINE"

  });
});