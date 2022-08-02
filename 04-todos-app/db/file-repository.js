const fs = require('fs');

const dbFile = './db/storage/tasks.json'

const save = data => {
    fs.writeFileSync(dbFile, JSON.stringify(data));
}

const read = () => {
    if (! fs.existsSync(dbFile)) {
        return null;
    }
    return JSON.parse(fs.readFileSync(dbFile, {encoding: 'utf-8'}));
}

module.exports = {
    save,
    read
}
