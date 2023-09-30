import express from "express";
import cors from "cors"
import bodyParser from "body-parser";


const server = express();

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors({
    origin: "*",
}))
// server.use(bodyParser)


server.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "this is the get / page"
    })
})

server.post("/post", async (req, res) => {
    const {name, email, password} = req.body;
    console.log(name, email, password)
    res.cookie("token", "token", {
        sameSite: "none",
        secure: true,
    })
    res.status(200).json({
        success: true,
        body: {name: name, email: email, password: password}
    })
    // res.send("hello world")

})


server.listen(5000, () => {
    console.log("server is listing")
})