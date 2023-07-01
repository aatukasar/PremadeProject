function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }

    if(values.email === "") {
        error.email = "Email-ID should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Invalid Email-ID"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }

    if(values.MobileNumber === "") {
        error.MobileNumber = "Mobile Number should not be empty"
    }
    else {
        error.MobileNumber = ""
    }
    if(values.Age === "") {
        error.Age = "Age should not be empty"
    }
    else {
        error.Age = ""
    }
    if(values.CollegeName === "") {
        error.CollegeName = "College Name should not be empty"
    }
    else {
        error.CollegeName = ""
    }
    return error;
}

export default Validation;