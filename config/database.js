const mongoose=require('mongoose')

mongoose.Promise = global.Promise
const CONNECTION_URI="mongodb://localhost:27017/examination-management-system"
const confogureDB=()=>{
    mongoose.connect(CONNECTION_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
        .then(()=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log(err)
        })
}
module.exports=confogureDB