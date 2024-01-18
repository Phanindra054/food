const jwt=require('jsonwebtoken')

module.exports=function(req,res,next){
    const token=req.header('x-token')
    if(!token)
    {
        return res.send("Token Not Created")
    }
    const cust=jwt.verify(token,"cust1234")
    res.user= cust.user
    next()
}