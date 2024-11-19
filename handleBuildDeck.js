const Deck = require('./models/deck')

// Pokémon (20)
// Squirtle (4x) - Basic Pokémon
// Wartortle (3x) - Stage 1 Evolution of Squirtle
// Blastoise (3x) - Stage 2 Evolution with powerful water attacks
// Poliwag (4x) - Basic Pokémon
// Poliwhirl (2x) - Stage 1 Evolution of Poliwag
// Poliwrath (2x) - Stage 2 Evolution with versatile attack options
// Energy (20)
// Water Energy (20x) - Provides Energy required for your Water-type attacks
// Trainer Cards (20)
// Bill (4x) - Draw 2 cards.
// Professor Oak (4x) - Discard your hand and draw 7 cards.
// Energy Retrieval (4x) - Retrieve up to 2 basic Energy cards from your discard pile and add them to your hand.
// Potion (4x) - Heal 20 damage from one of your Pokémon.
// Super Potion (4x) - Heal 60 damage but discard a Energy card attached to that Pokémon.

const waterDeck = [
    '673ba2be512658ebe992ac1e', // squirtle
    '673ba2be512658ebe992abcf', // wartortle
    '673ba2be512658ebe992ab3e', // blastoise
    '673ba2be512658ebe992ac06', // poliwag
    '673ba2be512658ebe992abc0', // poliwhirl
    '673ba2be512658ebe992ab62', // poliwrath
    '673ba2be512658ebe992ac4f', // water energy
    '673ba2be512658ebe992ac44', // bill
    '673ba2be512658ebe992ac41', // professor oak
    '673ba2be512658ebe992ac39', // energy retrieval
    '673ba2be512658ebe992ac48', // potion
    '673ba2be512658ebe992ac43', // super potion
]

async function handleBuildDeck() {

    const waterDeck = {
        pokemon: {
            squirtle: 4,
            wartortle: 3,
            blastoise: 3,
            poliwag: 4,
            poliwhirl: 2,
            poliwrath: 2
        },
        energy: {
            water: 20
        },
        trainers: {
            bill: 4,
            professorOak: 4,
            energyRetrieval: 4,
            potion: 4,
            superPotion: 4
        }
    }

    const cards = [
        '673ba2be512658ebe992ac1e',
        '673ba2be512658ebe992ac1e',
        '673ba2be512658ebe992ac1e',
        '673ba2be512658ebe992ac1e',
        '673ba2be512658ebe992abcf',
        '673ba2be512658ebe992abcf',
        '673ba2be512658ebe992abcf',
        '673ba2be512658ebe992ab3e',
        '673ba2be512658ebe992ab3e',
        '673ba2be512658ebe992ab3e',
        '673ba2be512658ebe992ac06',
        '673ba2be512658ebe992ac06',
        '673ba2be512658ebe992ac06',
        '673ba2be512658ebe992ac06',
        '673ba2be512658ebe992abc0',
        '673ba2be512658ebe992abc0',
        '673ba2be512658ebe992ab62',
        '673ba2be512658ebe992ab62',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac4f',
        '673ba2be512658ebe992ac44',
        '673ba2be512658ebe992ac44',
        '673ba2be512658ebe992ac44',
        '673ba2be512658ebe992ac44',
        '673ba2be512658ebe992ac41',
        '673ba2be512658ebe992ac41',
        '673ba2be512658ebe992ac41',
        '673ba2be512658ebe992ac41',
        '673ba2be512658ebe992ac39',
        '673ba2be512658ebe992ac39',
        '673ba2be512658ebe992ac39',
        '673ba2be512658ebe992ac39',
        '673ba2be512658ebe992ac48',
        '673ba2be512658ebe992ac48',
        '673ba2be512658ebe992ac48',
        '673ba2be512658ebe992ac48',
        '673ba2be512658ebe992ac43',
        '673ba2be512658ebe992ac43',
        '673ba2be512658ebe992ac43',
        '673ba2be512658ebe992ac43'
    ]

    try {
        const res = await Deck.create({ name: 'Water Deck' })
        console.log(res)
    } catch (err) {
        console.log(err)
    }
    
    // const res = await Deck.create({ name: 'Water Deck', cards: cards })
    // console.log(res)
}

handleBuildDeck()