var nodemailer= require('nodemailer');

var transporter=nodemailer.createTransport({
    service :'gmail',
    auth:{
        user:'sai@gmail.com',
        pass:'1234567'
    }
})
var options={
    from :'sai@gmail.com',
    to:'tuplescale@gmail.com',
    subject:'Daily update on learning',
    text:'thats easy to use'
}
transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Email is sent'+info.response)
    }
})