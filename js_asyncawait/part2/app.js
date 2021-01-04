$(function() {
  const url = 'https://deckofcardsapi.com/api/deck';

  // 1.
  (async function getSingleCard() {
    const resp = await axios.get(`${url}/new/draw/`);
    let { suit, value } = resp.data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  })();

  // 2.
  (async function getCardsFromSameDeck() {
    const resp1 = await axios.get(`${url}/new/draw/`);
    const firstCard = resp1.data.cards[0];
    const id = resp1.data.deck_id;
    const resp2 = await axios.get(`${url}/${id}/draw/`);
    const secondCard = resp2.data.cards[0];
    [firstCard, secondCard].forEach(card => console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`))
  })();

  // 3.
  (async function putCardsOnPage() {
    const resp = await axios.get(`${url}/new/shuffle/`);
    const id = resp.data.deck_id;
    $('button').show();
    $('button').on('click', async function() {
      const resp = await axios.get(`${url}/${id}/draw/`)
      let cardSrc = resp.data.cards[0].image;
      $('#card-area').append(
        $('<img>', {
          src: cardSrc,
        })
      );
      if (resp.data.remaining === 0) $('button').remove();
    }); 
  })();
});
