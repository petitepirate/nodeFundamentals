/** Command-line tool to generate Markov text. */

const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

function markovFile(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    let mm = new MarkovMachine(data);
    console.log(mm.makeText());
  });
};

async function markovWeb(url) {
  try {
    const resp = await axios.get(url);
    let mm = new MarkovMachine(resp.data);
    console.log(mm.makeText());
  }
  catch(err) {
    console.log(err);
    process.exit(1);
  }
}

function entry(type, data) {
  if (type='url') {
    markovWeb(data);
  } else markovFile(data);
};

entry(process.argv[2], process.argv[3]);
