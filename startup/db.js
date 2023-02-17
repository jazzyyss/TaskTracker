const mongoose = require('mongoose')

const db = `mongodb://localhost:27017/tasktracks`
//mongoose parameters
//mongoose.set('useNewUrlParser', true)
//mongoose.set('useFindAndModify', false)
//mongoose.set('useCreateIndex', true)
//mongoose.set('useUnifiedTopology', true)
mongoose.set('strictQuery', false);

module.exports = async _ => {
    try{
        await mongoose.connect(db)
        console.log(`Connected to MongoDB at ${db}`)
    }catch(er){
        console.log(`error in connecting to database ${er}`)
    }
}