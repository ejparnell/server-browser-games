const fs = require('fs')
const path = require('path')

async function handleGetData() {
    const file1 = path.join(__dirname, 'pokemonData', 'base1.json')
    const file2 = path.join(__dirname, 'pokemonData', 'base2.json')
    const file3 = path.join(__dirname, 'pokemonData', 'base3.json')
    const file4 = path.join(__dirname, 'pokemonData', 'base4.json')
    const file5 = path.join(__dirname, 'pokemonData', 'base5.json')
    const file6 = path.join(__dirname, 'pokemonData', 'basep.json')
    const file7 = path.join(__dirname, 'pokemonData', 'energy.json')
    const file8 = path.join(__dirname, 'pokemonData', 'gym1.json')
    const file9 = path.join(__dirname, 'pokemonData', 'gym2.json')
    const file10 = path.join(__dirname, 'pokemonData', 'si1.json')
    
    const data1 = await fs.readFileSync(file1)
    const data2 = await fs.readFileSync(file2)
    const data3 = await fs.readFileSync(file3)
    const data4 = await fs.readFileSync(file4)
    const data5 = await fs.readFileSync(file5)
    const data6 = await fs.readFileSync(file6)
    const data7 = await fs.readFileSync(file7)
    const data8 = await fs.readFileSync(file8)
    const data9 = await fs.readFileSync(file9)
    const data10 = await fs.readFileSync(file10)

    const { data: cards1 } = JSON.parse(data1)
    const { data: cards2 } = JSON.parse(data2)
    const { data: cards3 } = JSON.parse(data3)
    const { data: cards4 } = JSON.parse(data4)
    const { data: cards5 } = JSON.parse(data5)
    const { data: cards6 } = JSON.parse(data6)
    const  cards7 = JSON.parse(data7)
    const { data: cards8 } = JSON.parse(data8)
    const { data: cards9 } = JSON.parse(data9)
    const { data: cards10 } = JSON.parse(data10)

    const allData = cards1.concat(cards2, cards3, cards4, cards5, cards6, cards7, cards8, cards9, cards10)
    // console.log('basep', cards6)
    // console.log('energy', cards7)
    // console.log('gym1', cards8)
    // console.log('gym2', cards9)
    // console.log('si1', cards10)

    // console.log(allData[0])
    const cleanData = []
    allData.forEach(item => {
        console.log(item)
        cleanData.push({
            name: item.name,
            supertype: item.supertype,
            level: item.level,
            hp: item.hp,
            rules: item.rules,
            types: item.types,
            evolvesFrom: item.evolvesFrom,
            abilities: item.abilities,
            attacks: item.attacks,
            weaknesses: item.weaknesses,
            retreatCost: item.retreatCost,
            convertedRetreatCost: item.convertedRetreatCost,
            rarity: item.rarity,
            flavorText: item.flavorText,
            nationalPokedexNumbers: item.nationalPokedexNumbers,
            images: item.images.large,
            set: item.set.name
        })
    })
    fs.writeFileSync(path.join(__dirname, 'pokemonData', 'cleanData.json'), JSON.stringify(cleanData))
}

handleGetData()