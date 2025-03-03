const year = parseInt(process.argv[2]);

if(year >= 1000 && year <= 2099){
    if((year % 4 ===0 && year % 100 !== 0 ) || (year % 400 ===0)){
        console.log(year + " is a Leap Year");
    }else{
        console.log(year + " is Not a Leap Year");
    }
}
else{
    console.log("Please Enter a Valid 4-digit year");
}
