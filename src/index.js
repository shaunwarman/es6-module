import request from 'request';

function getQuote() {

    return new Promise((resolve, reject) => {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', (error, response, body) => {
            let quote = body;

            resolve(quote);
        });
    });
}

async function main() {
    let quote = await getQuote();
    console.log(quote);
}

main();