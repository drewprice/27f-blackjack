enum CardValue {
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace
}

interface Card {
  value: CardValue
}

const buildDeck =  () => {
    const suit = []

    for (let value in CardValue) {
      if (isNaN(Number(value))) {
        suit.push(value)
      }
    }

  return suit.concat(suit, suit, suit)
}

class Deck {
  cards: Card[]
  constructor() {
    this.cards = buildDeck()
  }
}

const deck = new Deck()

console.log(deck)
