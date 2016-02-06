import fs from 'fs';

const file = './test.txt';

fs.readFile(file, (error, data) => {
    if (error) {
        console.log('Error' + error);
    } else {
        console.log('Data ' + data);
    }
});