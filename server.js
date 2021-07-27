const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next)=>{
    console.log("hello using middleware");
    next();
});
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
