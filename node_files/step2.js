const fs = require('fs');
const axios = require('axios');

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`File contents: ${data}`);
  });
};

async function webCat(url) {
  try {
    const resp = await axios.get(url);
    console.log(resp.data);
  }
  catch(err) {
    console.log(err);
    process.exit(1);
  }
}

function entry(param) {
  if (param.startsWith('http')) {
    webCat(param);
  } else cat(param);
};

entry(process.argv[2]);
