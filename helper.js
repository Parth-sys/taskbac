

async function createEntry(client,Fullname,img,Mobile,Email,Job,dob,city){

    return await client.db('users').collection("Task").insertOne({Fullname:Fullname,img:img,Mobile:Mobile,Email:Email,Job:Job,dob:dob ,city:city})

}


async function getdata(client){

    return await client.db('users').collection("Task").find().toArray()

}




export {createEntry,getdata}