const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "Plaistow, London, England",
  },

  drake: {
    age: 35,
    birthName: "Aubrey Drake Graham",
    birthLocation: "Toronto, Ontario, Canada",
  },

  "lil baby": {
    age: 27,
    birthName: "Dominique Armani Jones",
    birthLocation: "Oakland City, Atlanta, Georgia, U.S.",
  },

  "moneybagg yo": {
    age: 30,
    birthName: "DeMario DeWayne White Jr",
    birthLocation: "South Memphis, Memphis, Tennessee, U.S.",
  },

  "lil wayne": {
    age: 39,
    birthName: "Dwayne Michael Carter Jr.",
    birthLocation: "New Orleans, Louisiana, U.S.",
  },

  "lil nas x": {
    age: 23,
    birthName: "Montero Lamar Hill",
    birthLocation: "Lithia Springs, Georgia, U.S.",
  },
  "jack harlow": {
    age: 24,
    birthName: "Jackman Thomas Harlow",
    birthLocation: "Louisville, Kentucky, U.S.",
  },
  dababy: {
    age: 30,
    birthName: "Jonathan Lyndale Kirk",
    birthLocation: "Cleveland, Ohio, U.S.",
  },

  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();

  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`);
});
