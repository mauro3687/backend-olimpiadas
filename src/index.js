const express= require('express');
const app = express();
const morgan=require('morgan');

//settings

app.set('port',process.env.PORT || 3000)
app.set('json spaces ',2)

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//router
app.use(require('./router/index'))

app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
    }); 
   

