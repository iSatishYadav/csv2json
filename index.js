const csvToJson = require('csvtojson');
const fs = require('fs');
const path = require('path');
const csvFilePath = path.join(__dirname, 'data', 'customer-data.csv');

const csv2Json = (csvPath = csvFilePath, callback) => {
    csvToJson().fromFile(csvPath)
        .then((json) => {
            callback(null, JSON.stringify(json));
        });
}

csv2Json(process.argv[2], (error, data) => {
    if (error) return console.error(error);
    console.log(`Got this JSON: ${JSON.stringify(data)}`);
    fs.writeFileSync(path.join(__dirname, 'output', 'customer-data.json'), data, 'utf-8');
});