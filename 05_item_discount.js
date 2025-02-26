let items = [ 250,665,300,900,50];
console.log(`MRP: ${items} `);

for (let i = 0; i < items.length; i++) {
    let offer = items[i]/10
    items[i]-=offer  
    
}
console.log(`After 10% discount: ${items}`);
