const gameEvent = new Map(
    [
        [17,'GOAL'],
        [36,'SUBSTITUTON'],
        [47,'GOAL'],
        [61,'SUBSTITUTON'],
        [64,'YELLOW CARD'],
        [69,'RED CARD'],
        [70,'SUBSTITUTON'],
        [72,'SUBSTITUTON'],
        [76,'GOAL'],
        [80,'GOAL'],
        [92,'YELLOW CARD'],

    ]
);
//1
console.log(gameEvent.values());
const events = new Set( gameEvent.values())
console.log(events);
//2.
gameEvent.delete(64);
//3.
const time = [...gameEvent.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvent.size} minutes`);

//4.
for(const [min,event] of gameEvent  ){
    const half = min <= 45 ? 'FIRST' :'SECOND0';
    console.log(`[${half} HALF] ${min}: ${event}`);
}
