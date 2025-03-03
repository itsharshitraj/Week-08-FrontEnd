// takes day and month from the command line
const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);

if((month === 3 && day>=20) || (month===4 || month===5) || (month===6 && day <=20)){
    console.log("True - The date is between March 20 and June 20");
} else{
    console.log("False-The date is NOT in the range");
}