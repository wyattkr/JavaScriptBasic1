function firsthalf(string){
    if(string.length % 2 ===0){
    var firsthalf = string.substring(0,string.length/2);


    console.log(firsthalf);
    }
}
firsthalf("WooHoo")
firsthalf("Hello1")
firsthalf("abcdef")