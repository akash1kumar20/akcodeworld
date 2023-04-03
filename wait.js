console.log('Person 1: show the ticket');
console.log('Person 2: show the ticket');

const preMovieTalks = async () => {
    const wifeBringsTicket = new Promise ((resolve,reject) => {
        setTimeout(() => resolve('Ticket'),3000);
    });

    const popcornTime = new Promise ((resolve,reject) => resolve('butter'));
    const butterOnPopcorn = new Promise ((resolve,reject) => resolve('butter'));
    const coldDrinkTime = new Promise ((resolve,reject) => resolve('drinks'));
    
    let ticket = await wifeBringsTicket;
    console.log('He: Aa gyi tum! chalo chale andhr');
    console.log('She: Nahi yaar! mujhe bhook lagi hai');
    console.log('He: Chalo me popcorn leke ata hu phir');
    console.log('He: Chalo ab chale');

    let popcorn =  await popcornTime;
    console.log('She: Yaar eshpe butter toh hai nhi');
    console.log('He: Ruko! me leke ata hu');
    console.log('He: Lo Khush! chalo ab chale');

    let butter = await butterOnPopcorn;
    console.log('She: Yaar eshpe butter toh hai nhi');
    console.log('He: Ruko! me leke ata hu');
    console.log('He: Lo Khush! chalo ab chale');

    let drinks = await coldDrinkTime;
    console.log('She: Yaar! etna kharcha ho gya hai toh ek cold-drink bhi lelo');
    console.log('He: Yaar! tum ek baar me nhi bta skti kya');
    console.log('She: Yaar! Please le aao na');
    console.log('He: Okay! leke ata hu');
    console.log('He: Chalo ab chale');



    return ticket;
}
preMovieTalks().then((t) => console.log(`Person 3: Show the ${t}`));
console.log('Person 4: show the ticket');
console.log('Person 5: show the ticket');
