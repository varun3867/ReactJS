//import the modules
//require() is the predefined function used to import the modules
const express = require("express")
const mongodb = require("mongodb")
const cors = require("cors")


//create the rest object
//rest object used to develop rest services
const app = express()
//where "app" is the rest object
//where "app" object used to develop rest services

//enable the cors policy
app.use(cors())

//set the json as MIME type
app.use(express.json())

//create the client object
const ashokit = mongodb.MongoClient;

//where ashokit is the client object
//by using ashokit we can connect to the database

//create the get request
app.get("/products",(req,res)=>{

    ashokit.connect("mongodb+srv://admin:admin@cluster0.1w6x8.mongodb.net/miniproject?retryWrites=true&w=majority",(err,connection)=>{
                if(err) throw err
                else{
                    const db = connection.db("miniproject")
                    db.collection("products").find().toArray((err,array)=>{
                        if(err) throw err
                        else{
                            res.send(array)
                        }
                    })


                }
    })

})



const token_middleware = (req,res,next) => {

    const headers = req.headers;
    if(headers.token === "ashokIt"){
        next();
    }
    else{
        res.send({"auth":"Authentication Failure"})
    }

}



//before executing the post request we need to verify the token
//If token matches then execute post request otherwise don't execute it
app.post("/login",[token_middleware],(req,res)=>{

    ashokit.connect("mongodb+srv://admin:admin@cluster0.1w6x8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err
        else{
            db = collection.db("miniproject");
            db.collection("login_details").find({"email":req.body.email,"password":req.body.password}).toArray((err,array)=>{
                if(err) throw err
                else{
                    if(array.length>0){
                        res.send({"login":"success"})
                    }
                    else{
                        res.send({"login":"fail"})
                    }
                }
            })
        }
    })

})






app.listen(8080,()=>{
    console.log("server listening the port number 8080")
})