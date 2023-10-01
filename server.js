import express from "express";
import cors from "cors"
import bodyParser from "body-parser";


const server = express();

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors({
    origin: ["http://127.0.0.1:5500"],
    credentials: true,
}))
// server.use(bodyParser)


server.get("/", (req, res) => {
    console.log("requsting base url page")
    res.status(200).json({
        success: true,
        message: "this is the get / page"
    })
})

server.post("/get-cookie", (req, res) => {
    console.log("requesting cookie page")
    // res.cookie("cookie", "cookie value", {
    //     maxAge: new Date(Date.now() + 600000)
    // })
    res.cookie("foo", "bar", {
        expires: new Date(Date.now() + 60000),
        httpOnly: true,
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
    res.status(200).cookie("token", "token", {
        expires: new Date(Date.now() + 60000),
        sameSite: "none",
        secure: true,
    }).json({
        success: true,
        body: {name: name, email: email, password: password}
    })
    // res.send("hello world")

})


server.listen(5000, () => {
    console.log("server is listing")
})