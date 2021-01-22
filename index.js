const readLineSync = require('readline-sync');

const userResponse = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n'));

console.log(`You selected ${userResponse}`);

function urlEncode(url)
{
   //("https://workat.tech/ide") → https%3A%2F%2Fworkat.tech%2Fide
   return encodeURIComponent(url);
}

function urlDecode(url)
{
   return decodeURIComponent(url);
}

switch(userResponse)
{
   case 1:
   const url1 = readLineSync.question('Please enter the url to be encoded\n');
   console.log(urlEncode(url1));
   break;
   
   case 2:
   const url2 = readLineSync.question('Please enter the url to be decoded\n');
   console.log(urlDecode(url2));
   break;

   default:
   console.log('Invalid option');
   break;
}



