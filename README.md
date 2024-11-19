## Routes

Pokemon

/pokemon

GET / - Get all Pokemon
GET /search - Search for Pokemon name, type, number - Search bar action with queries for what to search on
GET /:id - Get Pokemon by ID - Click on Pokemon to get more information

Booster Packs

/booster-packs

GET / - Get all Booster Packs
GET /:set/buy-pack - Get Booster Pack by ID - Get a fully constructed Booster Pack and add it to your binder

Binder

/binder

GET / - Get all of the signed in user's Pokemon
POST / - Add a Pokemon to the signed in user's binder
DELETE /:id - Remove a Pokemon from the signed in user's binder

Deck

/deck

GET / - Get all of the signed in user's Decks
POST / - Create a Deck to the signed in user's Decks
DELETE /:id - Remove a Deck from the signed in user's Decks
UPDATE /:id - Update a Deck from the signed in user's Decks

User

/user

/signup - Sign up for an account
/signin - Sign in to an account
/signout - Sign out of an account

general actions
As a user I want to sign up for an account
As a user if I signed up for an account I want to be automatically signed in
As a user I want to be able to sign in to an account
As a user I want to be able to sign out of an account

singed in actions
As a signed in user I want to be able to see all Pokemon
    As a user I want to see an ordered list of Pokemon, followed by Trainers, followed by Energy
    As a signed in user I want to be able to search for Pokemon
        Search on rarity, type, name, number
As a signed in user I want to be able to see more information about a Pokemon
    Just a show page. When clicking on a card you get this page
As a signed in user I want to be able to see all Booster Packs
    This is the buy page
    As a signed in user I want to be able to buy a Booster Pack
    That pack will deduct from the user's balance 
As a signed in user I want to be able to see all of my Pokemon
    Shows one of every Pokemon in the user's binder.
    Duplicate Pokemon cards are shown as a number on top of the card
    Search on rarity, type, name, number
    Display a collectors page with not found cards as greyed out
As a signed in user I want to be able to add a Pokemon to my binder
    This should be for trading cards
As a signed in user I want to be able to see all of my Decks
As a signed in user I wantt to be shown decks that I can build
    Shows a list of decks that the user can build
    Decks they can build are full color while decks they can't are greyed out
    On click a list of cards are shown - indecates how many of each card the user currently has
As a signed in user I want to be able to create a Deck
As a signed in user I want to be able to remove a Deck
As a signed in user I want to be able to update a Deck
