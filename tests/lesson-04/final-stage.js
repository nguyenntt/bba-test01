// Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 chia hết cho 17. 
// Xem format ở hình dưới

// cách 1
let dem = 0;

for (let x = 1; x <= 100; x++) {
    for (let y = x; y <= 100; y++) {
        let z = x + y;

        if (z % 17 === 0) {
            dem = dem + 1;
            console.log(`Cặp số chia hết cho 17 là (${x}, ${y})`);
        }
    }
}

console.log(`Tổng số cặp là ${dem}`);

// cách dung for of
let dem2 = 0;

let numbers = Array.from({ length: 100 }, (_, i) => i + 1);

for (let x of numbers) {
    for (let y of numbers) {
        if (y >= x) {
            let z = x + y;

            if (z % 17 === 0) {
                dem2 ++;
                console.log(`Cặp số chia hết cho 17 là (${x}, ${y})`);
            }
        }
    }
}

console.log(`Tổng số cặp là ${dem}`);

// cách dung for of
// và toán tử điều kiện
let dem3 = 0;
let arry =Array.from({length:100},(_,i)=>i+1);
for (let x of arry){
    for(let y of arry){
      if (y>=x){
        let z = x+y;
        z% 17 ===0 ? (dem3++, console.log(`Cặp số chia hết cho 17 là (${x}, ${y})`))
        : null;
      }
    }
}