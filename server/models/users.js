const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

const list = [
    { 
        firstName: 'Moshe',
        lastName: 'Plotkin',
        handle: '@JewPaltz',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo3I5GL9_Zd_LULXRIXTzRLlVESBnoGp8sw&usqp=CAU',
        password: 'me',
        isAdmin: true,
        emails: [
            "plotkinm@newpaltz.edu"
        ],
        following: [ ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
    { 
        firstName: 'Joseph',
        lastName: 'Smith',
        handle: '@JSmith',
        pic: 'https://images.livemint.com/img/2021/08/10/1200x900/20201025_MUM-PC-MN_Gym_Reopen_015_1628583917333_1628583934428.JPG',
        password: 'strong',
        isAdmin: true,
        emails: [
            "JosephS@gmail.com"
        ],
        following: [ ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
    { 
        firstName: 'John',
        lastName: 'Doe',
        handle: '@JDoe',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTf_g526I0vEz5JTkLL2OHN67uXyRr2Up3A&usqp=CAU',
        password: 'gym',
        isAdmin: true,
        emails: [
            "Johndgym@gmail.com"
        ],
        following: [ ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
    { 
        firstName: 'Alice',
        lastName: 'Baker',
        handle: '@ABaker',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1Mguaf76EdqHQnpBuETeY1cmBhhp3EttsQ&usqp=CAU',
        password: 'workout',
        isAdmin: true,
        emails: [
            "AliceB@gmail.com"
        ],
        following: [ ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },

];

module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }

module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 

module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));

module.exports.Add = async function Add(user) {
    if(!user.firstName){
         return Promise.reject( { code: 422, msg: "First Name is required" } )
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
    
        console.log({
            user, salt: process.env.SALT_ROUNDS, hash
        })
        
        user.password = hash;

        const user2 = await collection.insertOne(user);
        user._id = user2.insertedId;

        return { ...user, password: undefined };
}


module.exports.Update = async function Update(user_id, user) {

    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(user_id) }, 
        { $set: user },
        { returnDocument: 'after'}
    );
    console.log({ user_id, results });
        
    return { ...results.value, password: undefined };
}

module.exports.Delete = async function Delete(user_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(user_id) })

    return results.value;
}

module.exports.Login = async function Login(handle, password){
    console.log({ handle, password})
    const user = await collection.findOne({ handle });
    if(!user){
        return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });
    }

    const result = await bcrypt.compare(password, user.password)
        
    if( ! result ){
        throw { code: 401, msg: "Wrong Password" } ;
    }
    
    const data = { ...user, password: undefined };
    
    return { user: data };

    
}
module.exports.Seed = async ()=>{
    for (const x of list) {
        await module.exports.Add(x)
    }
}
