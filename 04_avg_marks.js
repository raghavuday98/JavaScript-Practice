let marks = [95,97,78,58,89,58,86,88]
let sum=0;
for (const val of marks) {
    sum+=val;
}
let avg = sum/marks.length;
console.log(`Average marks are ${avg}`);
