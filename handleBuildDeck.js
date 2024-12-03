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

// fireDeck
// Charizard - Base Set (x2)
// Charmeleon - Base Set (x3)
// Charmander - Base Set (x4)
// Ninetales - Base Set (x2)
// Vulpix - Base Set (x3)
// Arcanine - Base Set (x2)
// Growlithe - Base Set (x3)
// Magmar - Fossil (x3)
// Trainer Cards (20):
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Item Finder - Base Set (x1)
// Pokémon Trader - Fossil (x2)
// Energy Cards (20):
// Fire Energy (x20)

// electricDeck
// Pokémon (20):
// Raichu - Base Set (x2)
// Pikachu - Base Set (x4)
// Electrode - Base Set (x2)
// Voltorb - Base Set (x3)
// Zapdos - Fossil (x2)
// Magnemite - Base Set (x3)
// Magneton - Base Set (x2)
// Electabuzz - Base Set (x3)
// Trainer Cards (20):
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Item Finder - Base Set (x1)
// Pokémon Center - Base Set (x1)
// Energy Cards (20):
// Electric Energy (x20)

// grassDeck
// Pokémon (20):
// Venusaur - Base Set (x2)
// Ivysaur - Base Set (x3)
// Bulbasaur - Base Set (x4)
// Vileplume - Jungle (x2)
// Gloom - Jungle (x3)
// Oddish - Jungle (x4)
// Scyther - Jungle (x4)
// Trainer Cards (20):
// Brock's Grit - Rocket (x1)
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Pokémon Center - Base Set (x1)
// Energy Cards (20):
// Grass Energy (x20)

// psychicDeck
// Pokémon (20):
// Alakazam - Base Set (x2)
// Kadabra - Base Set (x3)
// Abra - Base Set (x4)
// Gengar - Fossil (x2)
// Gastly - Fossil (x4)
// Haunter - Fossil (x2)
// Mewtwo - Base Set (x2)
// Drowzee - Base Set (x3)
// Hypno - Base Set (x2)
// Trainer Cards (20):
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Item Finder - Base Set (x1)
// Pokémon Center - Base Set (x1)
// Energy Cards (20):
// Psychic Energy (x20)

// fightingDeck
// Pokémon (20):
// Machamp - Base Set (x2)  
// Machoke - Base Set (x3)  
// Machop - Base Set (x4)  
// Hitmonchan - Base Set (x4)  
// Hitmonlee - Base Set (x2)  
// Poliwrath - Base Set (x2)  
// Poliwag - Base Set (x3)  
// Kabutops - Fossil (x2)
// Trainer Cards (20):
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Item Finder - Base Set (x1)
// Pokémon Center - Base Set (x1)
// Energy Cards (20):
// Fighting Energy (x20)

// Raindance Deck
// Core Pokémon (20):
// Blastoise (Base Set) - (x3)
// Squirtle (Base Set) - (x4)
// Wartortle (Base Set) - (x2)
// Gyarados (Fossil) - (x2)
// Lapras (Base Set) - (x2)
// Articuno (Fossil) - (x2)
// Seel (Base Set) - (x3)
// Dewgong (Base Set) - (x2)
// Trainer Cards (20):
// Professor Oak (Base Set) - (x2)
// Bill (Base Set) - (x4)
// Energy Retrieval (Base Set) - (x2)
// Energy Search (Base Set) - (x2)
// Super Energy Retrieval (Base Set) - (x2)
// Computer Search (Base Set) - (x1)
// Pokémon Breeder (Base Set) - (x2)
// Gust of Wind (Base Set) - (x2)
// Potion (Base Set) - (x2)
// Energy Cards (20):
// Water Energy (x20)

// Haymaker Deck
// Core Pokémon (20):
// Hitmonchan (Base Set) - (x4)
// Hitmonlee (Base Set) - (x2)
// Scyther (Jungle) - (x3)
// Jigglypuff (Base Set) - (x3)
// Wigglytuff (Base Set) - (x2)
// Electabuzz (Base Set) - (x3)
// Mewtwo (Base Set) - (x2)
// Poliwag (Base Set) - (x1)
// Trainer Cards (20):
// Professor Oak (Base Set) - (x2)
// Bill (Base Set) - (x4)
// Energy Retrieval (Base Set) - (x2)
// Energy Search (Base Set) - (x2)
// Switch (Base Set) - (x2)
// Gust of Wind (Base Set) - (x2)
// Potion (Base Set) - (x2)
// Computer Search (Base Set) - (x1)
// Card Doppler (Base Set) - (x1)
// Item Finder (Base Set) - (x1)
// Energy Cards (20):
// Fighting Energy (x15)
// Basic Energy (x5) - (such as Colorless Energy)

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

    const cards = [
        
                
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