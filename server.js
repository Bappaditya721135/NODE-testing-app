import express from "express";
import cors from "cors"
import bodyParser from "body-parser";


const server = express();

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors({
    origin: "*",
    credentials: true,
}))
// server.use(bodyParser)


server.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "this is the get / page"
    })
})

server.get("/get-cookie", (req, res) => {
    res.cookie("cookie", "cookie value", {
        sameSite: "none",
        secure: true,
    })
    res.json({
        "hello": "hello"
    })
})

server.post("/post", async (req, res) => {
    const {name, email, password} = req.body;
    console.log(name, email, password)
    res.status(200).json({
        success: true,
        body: {name: name, email: email, password: password}
    })
    // res.send("hello world")

})


server.listen(5000, () => {
    console.log("server is listing")
})