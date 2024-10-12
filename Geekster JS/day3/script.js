// let arr=[1,10,20,30,50,43,561,789,"gh",true,{name:"kmnbv"},BigInt(456789)]
// console.log(arr)

let players = [
  { name: "Priyanshu", score: 100 },
  { name: "Priya", score: 65 },
  { name: "Alamat", score: 62 },
  { name: "Priyanka", score: 80 },
  { name: "Kirali", score: 45 },
  { name: "Vikas", score: 25 },
  { name: "hiuu", score: 100 },
];

// console.log(players[2]);
// console.log(players.length);

// for (let i=0; i<players.length; i++){
//     console.log(players[i]);
// }

// players.push({name:"igen",score:63})

// console.log(players);

// players.pop();
// console.log(players);

//unshift //add from first

// players.unshift({name:"nancy",score:55});
// console.log(players);

// players.shift(); //delete players from first
// console.log(players);

// let arrsliced=players.slice(0,3);

// console.log(arrsliced);

//splice
// players.splice(0,3);
// console.log(players);

// console.log(players.reverse());

//some and every
// let info=players.every(function(obj){
//     if(obj.score>90){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(info);

//find

// let findPlayer=players.find(function(obj){
//     return obj.score===100;
// })

// console.log(findPlayer);

// let arr=[5,3,10,54,55,69,78,96];
// console.log(arr.sort(function(a,b){
//     return a-b;
// }))

players.sort(function (obj1, obj2) {
  return obj1.score - obj2.score;
});
console.log(players);

delete players[0];
console.log(players)
