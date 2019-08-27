function endsly(string){
if(string .substring(string.length-2).match("ly")){
    console.log("true")
}
else{
    console.log("False");
}
}
endsly("Happy");
endsly("truly");