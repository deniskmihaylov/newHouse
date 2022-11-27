function newHouse (input) {
    let flowersType = input[0]; 
    let flowersCount = Number(input[1]); 
    let budget = Number(input[2]); 
    let bill = 0

    switch(flowersType) {
        
        case 'Roses': 

    if (flowersCount > 80) {
        bill = (flowersCount * 5) * 0.90  
    } else {
        bill = flowersCount * 5; 
    } 
    if (budget < bill) {
        moneyNeeded = bill - budget; 
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    } else {
        moneyLeft = budget - bill;
        console.log (`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyLeft.toFixed(2)} leva left.`)
    } break; 

        case 'Dahlias': 

    if (flowersCount > 90) {
        bill = (flowersCount * 3.80) * 0.85
    } else {
        bill = flowersCount * 3.80; 
    } 
    if (budget < bill) {
        moneyNeeded = bill - budget; 
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    } else {
        moneyLeft = budget - bill;
        console.log (`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyLeft.toFixed(2)} leva left.`)
    } break; 

        case 'Tulips': 

    if (flowersCount > 80) {
        bill = (flowersCount * 2.80) * 0.85;
    } else {
        bill = flowersCount * 2.80; 
    } 
    if (budget < bill) {
        moneyNeeded = bill - budget; 
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    } else {
        moneyLeft = budget - bill;
        console.log (`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyLeft.toFixed(2)} leva left.`)
    } break; 

    case 'Narcissus': 

    if (flowersCount < 120) {
        bill = ((flowersCount * (3*1.15)).toFixed(2))
    } else {
        bill = flowersCount * 3; 
    }
    if (budget < bill) {
        moneyNeeded = bill - budget
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    } else {
        moneyLeft = budget - bill
        console.log (`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyLeft.toFixed(2)} leva left.`)
    } break;

        case 'Gladiolus': 
        if (flowersCount < 80) {
            bill = ((flowersCount * (2.50*1.20)).toFixed(2))
        } else {
            bill = flowersCount * 2.50; 
        }
        if (budget < bill) {
            moneyNeeded = bill - budget
            console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
        } else {
            moneyLeft = budget - bill
            console.log (`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyLeft.toFixed(2)} leva left.`)
        } break;
    } 

}