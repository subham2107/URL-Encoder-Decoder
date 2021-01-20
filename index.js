const readLineSync = require('readline-sync');

const user_response = readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n');

console.log(`You selected ${user_response}`);
logic(user_response);

function urlEncode(url)
{
return encodeURIComponent(url);
}

function urlDecode(url)
{
return decodeURIComponent(url);
}

function logic(user_response)
{
if(user_response==='1')
{
  const url = readLineSync.question('Please enter the url to be encoded\n');
  console.log(urlEncode(url));
}

else if(user_response==='2')
{
  const url = readLineSync.question('Please enter the url to be decoded\n');
 console.log(urlDecode(url));
}
else
{
  console.log('Invalid URL');
}
}



