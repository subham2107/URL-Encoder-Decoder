const readLineSync = require('readline-sync');

const user_response = readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n');

console.log(`You selected ${user_response}`);
logic(user_response);

function urlEncode(url)
{
console.log(encodeURIComponent(url));
}

function urlDecode(url)
{
console.log(decodeURIComponent(url));
}

function logic(user_response)
{
if(user_response==='1')
{
  const url = readLineSync.question('Please enter the url to be encoded\n');
  urlEncode(url);
}

else if(user_response==='2')
{
  const url = readLineSync.question('Please enter the url to be decoded\n');
  urlDecode(url);
}
else
{
  console.log('Invalid URL');
}
}



