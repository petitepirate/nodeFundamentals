const favNum = 4;
const url = "http://numbersapi.com";

// step 1
(async function getNumFact() {
  const resp = await axios.get(`${url}/${favNum}?json`);
  console.log(resp.data);
})();

// step 2
const favNums = [4, 12, 34, 92];
(async function getNumbersFacts() {
  const resp = await axios.get(`${url}/${favNums}?json`);
  console.log(resp.data);
})();

// step 3
(async function getNumbersFactsFromArray() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${url}/${favNum}?json`);
    })
  );
  facts.forEach(fact => $("#facts").append(`<p>${fact.text}</p>`));
})();
