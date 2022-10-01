export const regFormValidations = (inputObj) => {
    const { name, val } = inputObj;
    switch (name) {
        case 'uid':
            if (!val) {
                inputObj.errorMsg = 'Please enter the username'
            } else {
                var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if (!emailRegExp.test(val)) {
                    inputObj.errorMsg = 'Please enter valid email'
                }
            }
            break

        case 'pwd':
            if (!val) {
                inputObj.errorMsg = 'Please enter the password'
            } else {
                if (val.length < 5) {
                    inputObj.errorMsg = 'Password length should be min 5 chars'
                }
            }
            break

        case 'phone':
            if (!val) {
                inputObj.errorMsg = 'Please enter the phone number'
            } else {
                var phoneRegExp = /^\d{10}$/
                if (!phoneRegExp.test(val)) {
                    inputObj.errorMsg = 'Phone number should be 10 digits'
                }
            }
            break

        case 'gender':
            if (!val) {
                inputObj.errorMsg = 'Please select gender'
            }
            break

        case 'hobbies':
            if (!val) {
                inputObj.errorMsg = 'Please select hobbies'
            }
            break

        case 'country':
            if (!val) {
                inputObj.errorMsg = 'Please select the country'
            }
            break

        case 'address':
            if (!val) {
                inputObj.errorMsg = 'Please enter the address'
            }
            break

    }
    inputObj.isShowError = inputObj.errorMsg ? true : false
}