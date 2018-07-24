var CardValue;
(function (CardValue) {
    CardValue[CardValue["Two"] = 0] = "Two";
    CardValue[CardValue["Three"] = 1] = "Three";
    CardValue[CardValue["Four"] = 2] = "Four";
    CardValue[CardValue["Five"] = 3] = "Five";
    CardValue[CardValue["Six"] = 4] = "Six";
    CardValue[CardValue["Seven"] = 5] = "Seven";
    CardValue[CardValue["Eight"] = 6] = "Eight";
    CardValue[CardValue["Nine"] = 7] = "Nine";
    CardValue[CardValue["Ten"] = 8] = "Ten";
    CardValue[CardValue["Jack"] = 9] = "Jack";
    CardValue[CardValue["Queen"] = 10] = "Queen";
    CardValue[CardValue["King"] = 11] = "King";
    CardValue[CardValue["Ace"] = 12] = "Ace";
})(CardValue || (CardValue = {}));
var buildDeck = function () {
    var suit = [];
    for (var value in CardValue) {
        if (isNaN(Number(value))) {
            suit.push(value);
        }
    }
    return suit.concat(suit, suit, suit);
};
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = buildDeck();
    }
    return Deck;
}());
var deck = new Deck();
console.log(deck);
