import { MongoClient } from "mongodb";

async  function connection(){
   
    const url=   process.env.url ;        
   const client=new MongoClient(url);
 
    await client.connect();
    console.log("mongodb connected");
     return client
   
     //const user= await client
   //.db("users")         // this connection function returns the mongo client which is use for query 
          //without client we cant make query ,so it is very important 
   //.collection("P")
   //.findOne({id:"5"});

   //console.log(user)
}
export default connection;
