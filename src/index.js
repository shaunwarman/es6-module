import fs from 'fs';
import request from 'request';

const file = './test.txt';

function getQuote() {
    var quote;

    return new Promise(function(resolve, reject) {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
            quote = body;

            resolve(quote);
        });
    });
}

async function main() {
    var quote = await getQuote();
    console.log(quote);
}

main();