const favNum = 4;
const url = "http://numbersapi.com";

// step 1
$.getJSON(`${url}/${favNum}?json`).then(data => {
  console.log(data);
});

// step 2
const favNums = [4, 12, 34, 92];
$.getJSON(`${url}/${favNums}?json`).then(data => {
  console.log(data);
});

// step 3
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}/${favNum}?json`);
  })
).then(facts => {
  facts.forEach(data => $("#facts").append(`<p>${data.text}</p>`));
});
