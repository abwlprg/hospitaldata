const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'dist')));
//connection to mongodb

mongoose.connect('mongodb+srv://root:helloworld@' + 
'hospitalgeneratorapp.nrxe5.mongodb.net/hospitalStorage?' +
'retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error',(error)=>{
    console.log('ERROR' + error);
})

mongoose.connection.once('open' ,()=> {
    console.log('The connection MongoDB Atlas is working.')
})



//Body-Parser
//allows 
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

//Rest API
app.use('/api/createhospitaldata',require('./routes/create'));
app.use('/api/readhospitaldata',require('./routes/read'));
app.use('/api/updatehospitaldata',require('./routes/update'));
app.use('/api/deletehospitaldata',require('./routes/delete'));

app.get('*',(request, response)=>{
    response.sendFile(path.join(__dirname,'dist/hospital.html'));
});

app.listen(3000, ()=>{
    console.log('Listening at LocalHost:3000');
});