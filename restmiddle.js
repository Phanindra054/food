const jwt=require('jsonwebtoken')

module.exports= function(req,res,next){
    const token=req.header('x-token');
    if(!token)
    {
        return res.send('Token Not Found')
    }
    const tok=jwt.verify(token,"Rest1234")
    res.user=tok.user;
    next()
}