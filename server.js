const express=require('express')
const mongoose=require('mongoose')
const app=express()
const Admin=require('./Admin')
const jwt=require('jsonwebtoken')
const Restaurants= require('./Reastaurant')
const menu=require('./Menu')
const Restmiddle= require('./restmiddle')
const Adminmiddle= require('./Adminmiddle')
const Menu = require('./Menu')
const Review= require('./Reviews')
const Customer=require('./Customer')
const Custmiddle= require('./Custmiddle')
const Cart= require('./Cart')
const cors= require('cors')
const purchase=require('./Brought')
const { find } = require('./Admin')
const Reviews = require('./Reviews')
app.use(express.json())
mongoose.connect('mongodb://0.0.0.0/FoodOrdering',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Db Connected Succesfully")
}).catch(err=>{
    console.log(err)
})
app.use(cors({
    origin:'*',
}))
app.post('/Adminlogin',async(req,res)=>{
    const user=req.body;
    const fin= await Admin.findOne({Username: user.Username})
    if(!fin)
    {
        return res.status(400).send("User Not Found")
    }
    if(fin.Password!==user.Password)
    {
        return res.status(401).send("Incorrect Password")
    }
    
    const payload={
        user:{
            id:fin._id
        }
    }
    jwt.sign(payload,"AdminPhani",{expiresIn:3600000},(err,token)=>{
        if(err)
        {
            return res.send(err)
        }
        res.json({token})
    })
})
app.post('/registerRestaurant', async (req, res) => {
    const { Restaurant_Name, Owner_Name, Location, Contact,Email, Password, ConfirmPassword } = req.body;

    try {
        const fin = await Restaurants.findOne({ Restaurant_Name, Owner_Name });
        if (fin) {
            return res.status(400).send('User Already Exists');
        }

        if (Password !== ConfirmPassword) {
            return res.status(401).send('Check Passwords Once');
        }

        const newRestaurant = new Restaurants({
            Restaurant_Name,
            Owner_Name,
            Location,
            Contact,
            Email,
            Password,
            ConfirmPassword
        });

        const savedData = await newRestaurant.save();
        return res.json(savedData);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post('/LoginRestaurant',async(req,res)=>{
    const user=req.body
    const rest = await Restaurants.findOne({ Owner_Name: user.Owner_Name });
    if(!rest)
    {
        return res.status(400).send("Not Found")
    }
    if(rest.Password!==user.Password)
    {
       return res.status(401).send("Password Incorrect");
    }
    const payload={
        user:{
            id:rest._id
        }
    }
    jwt.sign(payload,"Rest1234",{expiresIn: 3600000},(err,token)=>{
        if(err)
        {
           return res.send(err)
        }
        return res.json({token});
    })
})
app.post('/addmenu',Restmiddle,async(req,res)=>{
    const {Food,Ingredients}=req.body
    const reas=await Restaurants.findById(res.user.id)
    const men=new menu({
        Restaurant: reas._id,
        Food,Ingredients
    })
    const asf= await men.save()
    return res.send(asf)
})
app.get('/showmenu', Restmiddle, async (req, res) => {
    const men = await menu.find({ Restaurant: res.user.id });
    return res.json(men);
});

app.delete('/deletemenu/:id', Restmiddle, async (req, res) => {
    try {
        const { id } = req.params;
        const del = await menu.findByIdAndDelete(id);

        if (!del) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        const allmen = await menu.find();
        return res.json(allmen);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.delete('/delrestaurant',Adminmiddle,async(req,res)=>{
    const {id}=req.body
    const rest = await Restaurants.findByIdAndDelete(id);

    res.json("succesfull")
})


app.post('/registerCustomer', async (req, res) => {
    const { Username, Mobile, Email, Location, Password, ConfirmPassword } = req.body;
        const fin = await Customer.findOne({ Username: Username, Email: Email });
        if (fin) {
            return res.status(400).send('User Already Exists');
        }

        if (Password !== ConfirmPassword) {
            return res.status(401).send('Check Passwords Once');
        }
        const newCust = new Customer({
            Username,
            Mobile,
            Email,
            Location,
            Password,
            ConfirmPassword,
        });
        const savedData = await newCust.save();
        return res.json(savedData);
    
})

app.post('/Customerlogin',async(req,res)=>{
    const user=req.body;
    const fin= await Customer.findOne({Username: user.Username})
    if(!fin)
    {
        return res.status(400).send("User Not Found")
    }
    if(fin.Password!==user.Password)
    {
        return res.status(401).send("Incorrect Password")
    }
    
    const payload={
        user:{
            id:fin._id
        }
    }
    jwt.sign(payload,"cust1234",{expiresIn:3600000},(err,token)=>{
        if(err)
        {
            return res.send(err)
        }
        res.json({token})
    })
})
app.post('/additem', Custmiddle, async (req, res) => {
    const { id } = req.body; // Change from id1 to id for consistency
    const asd = res.user.id;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
  
    const item = await Menu.findById(id);
  
    if (!item) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
  
    const data = new Cart({
      Customer: asd,
      Item: item.Food || 'Unknown Food',
      Cost: item.Restaurant || 'Unknown Restaurant',
    });
  
    try {
      const saved = await data.save();
      return res.json(saved);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/showcart',Custmiddle,async(req,res)=>{
    const all=await Cart.find({Customer:res.user.id})
    return res.json(all)
  })
app.delete('/delitem/:id', Custmiddle, async (req, res) => {
     const {id}= req.params
     await Cart.findByIdAndDelete(id)
     const remain= await Cart.find()
     return res.json(remain)
  });
  app.get('/viewmenu',Custmiddle,async(req,res)=>{
    const men=await Menu.find()
    return res.json(men)
  })
  app.get('/myrestaurant', Restmiddle, async (req, res) => {
    try {
        const myrest=await Restaurants.findById(res.user.id)
      if (!myrest) {
        return res.status(404).json({ error: "Restaurant not found" });
      }
      return res.json(myrest);
    } catch (error) {
      console.error("Error retrieving restaurant:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
   
app.get('/viewcustomers',Adminmiddle,async(req,res)=>{
    const cust=await Customer.find()
    return res.json(cust)
})
app.get('/viewrestaurants',Adminmiddle,async(req,res)=>{
    const cust=await Restaurants.find()
    return res.json(cust)
})
app.get('/viewadminmenu/:id',Adminmiddle,async(req,res)=>{
    const {id}=req.params
    const men=await Menu.find({Restaurant: id})
    return res.json(men)
})
app.get('/custdetails',Custmiddle,async(req,res)=>{
    const mydat= await Customer.findById(res.user.id)
    return res.json(mydat)
})
app.post('/custpurchase', Custmiddle, async (req, res) => {
    try {
      const purchases = req.body;
  
      if (!purchases || !Array.isArray(purchases)) {
        return res.status(400).json({ error: 'Invalid purchases data' });
      }
  
      const data = purchases.map((purchase) => ({
        Restaurant: purchase.Cost,
        Item: purchase.Item,
        Customer: res.user.id,
      }));
  
      console.log('Data to be inserted:', data);
  
      const savedData = await purchase.insertMany(data);
  
      console.log('Data successfully inserted:', savedData);
  
      return res.json(savedData);
    } catch (error) {
      console.error('Error in /custpurchase:', error);
      return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
  });
  
app.get('/getpurchase',Custmiddle,async(req,res)=>{
    const push=await purchase.find({Customer: res.user.id})
    return res.json(push)
})
app.get('/allrest',Custmiddle,async(req,res)=>{
    const allrest=await Restaurants.find()
    return res.json(allrest)
})
app.get('/allrestmenu/:id',Custmiddle,async(req,res)=>{
    const {id}=req.params
    const men=await Menu.find({Restaurant: id})
    return res.json(men)
})
app.delete('/delcart',Custmiddle,async(req,res)=>{
    const all=await Cart.deleteMany({Customer: res.user.id})
})
app.post('/addreview',Custmiddle,async(req,res)=>{
    const {Restaurant,Dish,Rating,Comments}=req.body
    const dat= new Review({
        Restaurant,Dish,Rating,Comments
    })
    dat.save()
    return res.json(dat)
})
app.get('/adminreview/:id',Adminmiddle,async(req,res)=>{
    const {id}=req.params
     const rest= await Reviews.find({Restaurant: id})
     return res.json(rest)
})
app.get('/adminmenu/:id',Adminmiddle,async(req,res)=>{
    const {id}=req.params
    const men=await Menu.find({Restaurant: id})
    return res.json(men)
})
app.get('/adminpurchase/:id',Adminmiddle,async(req,res)=>{
    const {id}=req.params
    const all=await purchase.find({Customer:id})
    return res.json(all)
})
app.get('/restreview',Restmiddle,async(req,res)=>{
    const id=res.user.id
    const all= await Reviews.find({Restaurant:id})
    return res.json(all)
})
app.listen(4001,()=>{console.log("Listening On Port 4001......")})