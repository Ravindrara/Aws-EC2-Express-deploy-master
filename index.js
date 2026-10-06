const express=require('express');
const path=require('path');
const pug=require('pug');
const app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/home',(req,res)=>{
    const subject=[
        'DevOps',
        'cd',
        'cns',
        'aws',
        'azure',
    ]
    res.render('sample.pug',{sub:subject});
 
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}   );