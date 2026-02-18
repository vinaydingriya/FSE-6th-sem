import express, { json } from 'express';


const  app = express();
const PORT = 8080;


app.use(express.json());  //parse the data in object form


app.get('/', (req,res)=>{
    res.send('this is a welcome page');
})

app.get('/products',(req, res)=>{
    let arr = [
        {name:"samsung", price:5000, rating:4, quantity:3},
        {name:"iphone", price:7000, rating:4, quantity:3},
        {name:"MI", price:5000, rating:4, quantity:3},
        {name:"HTC", price:5000, rating:4, quantity:3},
        {name:"LAVA", price:5000, rating:4, quantity:3},
        {name:"Nokia", price:5000, rating:4, quantity:3}
    ]
    res.json({products:arr})
})



///create a product api which can recieve data from frontend. console the data in server.


app.post('/register',(req,res)=>{
    console.log(req.body);
    res.json({msg:"data recieved"})
})




app.listen(PORT, ()=>{
    console.log('Server is running on ', `http://localhost:`+PORT);
})

//https://github.com/shubhamkumar123456/Tg-311-G-5.git