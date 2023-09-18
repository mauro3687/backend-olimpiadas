const {Router}=require('express')
const router =Router();
//routes
router.get('/test',(req,res) => {
    const data = {
        "name":"eze",
        "wed":"eze.com"
    };
    res.json(data);
});

module.exports = router