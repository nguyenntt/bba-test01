// bài tập 1 tạo hàm createCharacters

const characters =[
    {name:"nguyen",level: 1,health: 200},
    {name:"diem",level: 2,health: 1000},
    {name:"Sen",level: 3,health: 2000},
    {name:"Luu",level: 3,health: 500},
    {name:"Nam",level: 3,health: 5000},
]

let charactersPowerUp = characters.map(characters => {
    return {
        name: characters.name.toUpperCase(),
        level: characters.level * 2,
        health: characters.health *3
    };
});

console.log("In ra bảng mới theo yêu cầu",charactersPowerUp);

let possibleWinter = characters.filter(characters => characters.health >= 1000);

console.log("In ra các phần tử có chỉ số health >=1000",possibleWinter);

// Bài tập 2 tạo hàm printLeaderboard

  const player =[
        {name: "Mario",score: 1000},
        {name: "Lumi",score: 300},
        {name: "Flora",score: 400},
        {name: "Luke",score: 600},
        {name: "Taek",score: 800}
    ]

function printLeaderboard(player) {
    player.sort((a, b) => b.score - a.score);

    player.forEach((player, i) => {
    const medal = i === 0 ? "🥇" :
                  i === 1 ? "🥈" :
                  i === 2 ? "🥉" : "";

    console.log(`${i + 1}. ${medal} ${player.name} - ${player.score}`);
});
}

printLeaderboard(player);

