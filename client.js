const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "data.json");

function readAll() {
    console.log(file)
    const data = fs.readFileSync(file);
    const jsonData = JSON.parse(data);
    return jsonData["Clients"];
}


function create(object) {
    const data = readAll();
    object.Idloc = data.length ? data[data.length - 1].Idloc + 1 : 1; // Generate new Id
    data.push(object);
    const allData = JSON.parse(fs.readFileSync(file));
    allData["Clients"] = data;
    fs.writeFileSync(file, JSON.stringify(allData, null, 2));
    return object;
}



module.exports = {
   
    create,
   
};
