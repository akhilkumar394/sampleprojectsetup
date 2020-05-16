import express from 'express';
import route from '../apis/test/test_get';

const app = express();
// app.use('/',(req,res)=>{res.send('Hey its working')});

app.use(route);

export default app;