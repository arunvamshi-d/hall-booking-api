const express= require("express");
const app= express();



const roomsRoute= require("./routes/rooms")
const customersRoute= require("./routes/customers")

app.use(express.json());

app.use("/rooms",roomsRoute);
app.use("/customers",customersRoute)



app.listen(3001,()=>{
    console.log("server listening at port 3001")
})