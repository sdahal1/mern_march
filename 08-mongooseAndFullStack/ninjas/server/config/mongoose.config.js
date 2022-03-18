//connect to mongodb using mongoose 
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@march-db-cluster.o94lh.mongodb.net/ninjas_db_march?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
