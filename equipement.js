const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "data.json");

function readAll() {
    console.log(file);
    const data = fs.readFileSync(file);
    const jsonData = JSON.parse(data);
    return jsonData["Equipements"];
}

function readOne(id) {
    const data = readAll();
    return data.find((item) => item.Codequip === id);
}

function createE(object) {
    const data = readAll();
    object.Codequip = data.length ? data[data.length - 1].Codequip + 1 : 1; // Generate new Id
    data.push(object);
    const allData = JSON.parse(fs.readFileSync(file));
    allData["Equipements"] = data;
    fs.writeFileSync(file, JSON.stringify(allData, null, 2));
    return object;
}


module.exports = {
    readAll,
    readOne,
    createE,
 
};
