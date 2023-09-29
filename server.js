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

server.post("/post", (req, res) => {
    const {name, email, password} = req.body;
    res.status(200).json({
        success: true,
        body: {name, email, password}
    })
    // res.send("this is post")
})


server.listen(5000, () => {
    console.log("server is listing")
})