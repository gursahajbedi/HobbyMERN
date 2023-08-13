const Responses=require('../models/responses.model.js')
const nodemailer=require('nodemailer')

const Create=async(req,res)=>{
    const {name,email,phone,hobbies}=req.body
    console.log(req.body)
    const data=Responses.create({'name':name,'email':email,'phone':phone,'hobbies':hobbies}).then((res)=>{
        return res
    }).catch((err)=>{
        console.log(err)
    })
    return res.send({update:data})
}

const Readall=async(req,res)=>{
    const data=await Responses.find({}).then((res)=>{
        return res
    })
    return res.send(data)

}

const Send=async(req,res)=>{

    const id=req.body.id
    const reciever=req.body.reciever
    const data=id.map(async(oneid)=>{
        const data1=await Responses.findOne({'_id':oneid}).then((res)=>{return res})
        return data1
    })
    Promise.all(data).then(function(results) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSKEY
            }
          });
        
          const mailOptions = {
            from: process.env.EMAIL,
            to: reciever,
            subject: 'Data from HobbyMERN by Gursahaj Singh',
            text: JSON.stringify(results)
          };
        
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              res.send('Email sent successfully');
            }
          });
    })
}

const Deleteall=async(req,res)=>{
    console.log("hey")
    const id=req.body.id
    console.log(id)
    const data=await Responses.deleteMany({ "_id": { "$in": id }}).then((res)=>{
        return res
    }).catch((err)=>{
        console.log(`error:${err}`)
    })
    return res.send({delete:data})
}

const Update=async(req,res)=>{
    const {id}=req.params
    console.log(id)
    const {name,email,phone,hobbies}=req.body
    const data=await Responses.findOneAndUpdate({"_id":id},{'name':name,'email':email,'phone':phone,'hobbies':hobbies}).then((res)=>{
        console.log(res)
        return res
    }).catch((err)=>{
        console.log(err)
    })
    return res.send({update:"updated"})
}

module.exports={Create,Readall,Update,Deleteall,Send}