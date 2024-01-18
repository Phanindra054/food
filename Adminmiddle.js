const jwt=require('jsonwebtoken')

module.exports=function(req,res,next){
    const token=req.header('x-token')
    if(!token)
    {
        return res.send("Token")
    }
    const tok=jwt.verify(token,"AdminPhani")
    res.user=tok.user
    next()
}