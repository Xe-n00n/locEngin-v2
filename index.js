express=require('express')

const app = express();
app.use(express.json());

const {getAllEquipement, createEquipement, getEquipementDisponible, createClient} = require('./controllers.js');


app.get('/equipement', getAllEquipement);
app.get('/equipement/disponible',getEquipementDisponible);
app.post('/equipement', createEquipement);
app.post('/client', createClient);


app.listen(8080, () => {
    console.log('Server is running on port 8080');
})  