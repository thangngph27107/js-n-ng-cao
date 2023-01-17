const question = new Map([
    ['question','What is the best programing language on the world'],
    [1,'C'],[2,'Java'],[3,'Javascript'],
    ['correct',3],
    [true,'Correct'],
    [false,'In correct'],

]);
console.log(question);


for(const [key, value] of question){
    if(typeof key == 'number') console.log(`Answer ${key}: ${value}`);

}
const Answer = Number(prompt('Your answer'));
console.log(Answer);
console.log( question.get(question.get('correct') === Answer))