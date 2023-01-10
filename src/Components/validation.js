export const validation = (data) => {

    const errors = {};

    if(!data.name.trim()){
        errors.name = "You must enter a name"
    }else if(data.name.length < 3){
        errors.name = "Your name should be more than three words"
    }else{
        delete errors.name
    }

    if(!data.email){
        errors.email = "You must enter an email address"
    }else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Add a valid email address"
    } else {
        delete errors.email
    }

    if(!data.password){
        errors.password = "Please enter a password!"
    }
    else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/.test(data.password)){
        errors.password = "At least one uppercase, lowercase and a digit"
    }else{
        delete errors.password
    }

    if(!data.confirmPassword){
        errors.confirmPassword = "Please confirm your password!"
    } else if(data.confirmPassword !== data.password){
        errors.confirmPassword = "Passowords do not match"
    }else{
        delete errors.confirmPassword
    }

    if(!data.select){
        errors.select = "Choose a field"
    }else{
        delete errors.select
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted = "Please confirm our regulations!"
    }

    return errors;

}


