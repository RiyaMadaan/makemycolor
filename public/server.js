const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('../','public'));

// app.use(bodyParser.urlencoded({extended: false}));


// app.use((req, res, next)=>{
//     console.log("using middleware in express");
//     next();
// });
// app.get('/', (req,res)=>{
//     console.log(req.body);
//     // const user = {
//     //     name: "sally",
//     //     age: 34
//     // }
//     // res.send(user);
    
// })

// app.post('/profile', (req,res)=>{
//     console.log(req.body);
//             const user = {
//                 name: "sally",
//                 age: 34
//             }
//             res.send(user);
            
//         })

app.listen(2000);