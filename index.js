const readLineSync = require('readline-sync');

const response = readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n');

console.log(`You selected ${response}`);
logic(response);

function logic(response)
{
if(response==='1')
{
  const url = readLineSync.question('Please enter the url to be encoded\n');
  console.log(encodeURIComponent(url));
}

else if(response==='2')
{
  const url = readLineSync.question('Please enter the url to be decoded\n');
  console.log(decodeURIComponent(url));
}
}




