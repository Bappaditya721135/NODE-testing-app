import express from "express";
import cors from "cors"


const server = express();

server.use(express.json())
server.use(cors())


server.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "this is the get / page"
    })
})

server.post("/post", async (req, res) => {
    const {name, email, password} = await req.body;
    console.log(name, email, password)
    res.status(200).json({
        success: true,
        body: {name, email, password, hello: "hello"}
    })
    // res.send("this is post")
})


server.listen(5000, () => {
    console.log("server is listing")
})