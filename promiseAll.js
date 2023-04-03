console.log('Person 1: show the ticket');
console.log('Person 2: show the ticket');

const preMovieTalks = async () => {
    const wifeBringsTicket = new Promise ((resolve,reject) => {
        setTimeout(() => resolve('Ticket'),3000);
    });

    const popcornTime = new Promise ((resolve,reject) => resolve('butter'));
    const pizzaTime = new Promise ((resolve,reject) => resolve('pizza'));
    const coldDrinkTime = new Promise ((resolve,reject) => resolve('drinks'));

    let ticket  = await wifeBringsTicket;
    let [popcorn, pizza, drink] = await Promise.all([popcornTime,pizzaTime,coldDrinkTime]);
    console.log(`We get ${popcorn} & ${pizza} & ${drink}`);

return ticket;
}
preMovieTalks().then((t) => console.log(`Person 3: Show the ${t}`));
console.log('Person 4: show the ticket');
console.log('Person 5: show the ticket');
