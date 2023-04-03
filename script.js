console.log('Person 1: show the ticket');
console.log('Person 2: show the ticket');

const wifeBringsTicket = new Promise ((resolve,reject) => {
setTimeout(() => {
    resolve('ticket');
},3000)
});

const popcornTime = wifeBringsTicket.then((t) => {
    console.log('He: Aa gyi tum! chalo chale andhr');
    console.log('She: Nahi yaar! mujhe bhook lagi hai');
    console.log('He: Chalo me popcorn leke ata hu phir');
    console.log('He: Chalo ab chale');
    return new Promise ((resolve,reject) => resolve (`${t} and go in with popcorn`));
});

const butterOnPopcorn = popcornTime.then((t) => {
    console.log('She: Yaar eshpe butter toh hai nhi');
    console.log('He: Ruko! me leke ata hu');
    console.log('He: Lo Khush! chalo ab chale');
    return new Promise ((resolve,reject) => resolve (`Person 3: Shows the ${t} and butter on it`))
})

const coldDrinkTime = butterOnPopcorn.then((t) => {
    console.log('She: Yaar! etna kharcha ho gya hai toh ek cold-drink bhi lelo');
    console.log('He: Yaar! tum ek baar me nhi bta skti kya');
    console.log('She: Yaar! Please le aao na');
    console.log('He: Okay! leke ata hu');
    console.log('He: Chalo ab chale');
    return new Promise((resolve,reject) => resolve (`${t} with a cold-drink also`) )
})
coldDrinkTime.then((t) => console.log(t));
console.log('Person 4: show the ticket');
console.log('Person 5: show the ticket');

