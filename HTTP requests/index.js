import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => { //request and response 
    res.send("<h1>Bonsoir, je test les requetes HTTP<h1>");
});
app.get("/about", (req, res) => { //request and response 
    res.send("<h2>about me : j'aime le volleyball, le badminton et le tennis <h2>");
});

app.get("/contact", (req, res) => { //request and response 
    res.send("<h2>Contact : apellez moi au 514 700 7000<h2> <p>Email : ishakmegatli@gmail.com<p>");
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`);
});