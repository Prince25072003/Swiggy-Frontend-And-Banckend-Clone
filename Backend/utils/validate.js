const validator = require("validator");

function ValidateUser(data){

const mandatoryField = ["firstName","emailId","age","password"]

        const IsAllowed = mandatoryField.every((k)=> Object.keys(data).includes(k));

        if(!IsAllowed)
            throw new Error("Fields Missing");
        
        if(!validator.isEmail(data.emailId))
            throw new Error("Invalid Email");

        //password validate
        if(!validator.isStrongPassword(data.password))
            throw new Error("Weak Password");

        //firstname validate >=3 , <=20
        if(!(data.firstName.length>=3 && data.firstName.length<=20))
            throw new Error("Name should have atleast 3 character and atmost 20 character");

}

module.exports = ValidateUser;