$(function() {
    const url = 'https://deckofcardsapi.com/api/deck';
  
    // 1.
    $.getJSON(`${url}/new/draw/`).then(data => {
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
  
    // 2.
    let firstCard = null;
    $.getJSON(`${url}/new/draw/`)
      .then(data => {
        firstCard = data.cards[0];
        const id = data.deck_id;
        return $.getJSON(`${url}/${id}/draw/`);
      })
      .then(data => {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card) {
          console.log(
            `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
          );
        });
      });
  
    // 3.
    let id = null;
  
    $.getJSON(`${url}/new/shuffle/`).then(data => {
      id = data.deck_id;
      $('button').show();
    });
  
    $('button').on('click', function() {
      $.getJSON(`${url}/${id}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        
        $('#card-area').append(
          $('<img>', {
            src: cardSrc
          })
        );
        if (data.remaining === 0) $('button').remove();
      });
    });
  });
