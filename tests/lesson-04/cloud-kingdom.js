//bài tập 1

let playerName = "Mario";
let currentLive = 3;
const level1 = 25;
const level2 = 30;
const level3 = 45;
const sum = level1 + level2 + level3;
const avgcoin = sum / 3;
const sodu = sum % 3;

console.log(`Số dư khi chia tổng số coin cho ba là ${sodu}`);

// bài tập 2 
let powerUp = 'mushroom';
let effect = '';
if(powerUp === 'mushroom'){
    effect = 'Mario become Super';
}
else if (powerUp === 'flower'){
    effect = 'Mario can shoot fireballs';
}
else if (powerUp === 'start'){
    effect = 'Mario is invincible';
}
else if (powerUp === 'none'){
    effect = 'Mario is normal';
}
else effect = 'Unknown power-up';

console.log(effect);