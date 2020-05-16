import { Router } from 'express';

const router = Router();

router.get('/test',(req,res)=> {
    res.send('API status: runnning successfully!');
});

export default router;