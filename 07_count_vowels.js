function CountVowels(str) {
    let Count = 0
    for (const char of str) {
        if (char==="a" ||
            char==="e" ||
            char==="i" ||
            char==="o" ||
            char==="u" ) {
            Count++;
        }
        
    }
    console.log(`The total number of vowels are: ${Count}`);
    
}
//counting vowels ini my name
CountVowels("Uday Pratap Raghav")
