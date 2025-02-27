let nums=[];
for (let i = 1; i <= 100; i++) {
    nums.push(i)
  }
 let EvenNums = nums.filter((val)=>val%2==0
 )
console.log(`Even numbers from 1 to 100 are:${EvenNums}`);
