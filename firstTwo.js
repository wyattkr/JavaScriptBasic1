function firstTwo(string){
    if(string.length % 2 ===0){
    var firsttwo = string.substring(0,2);
    console.log(firsttwo);
    }

    }
    firstTwo("Hello")
    firstTwo("abcdefg")
    firstTwo("ab")