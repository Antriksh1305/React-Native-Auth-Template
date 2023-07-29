export const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(email);
    const isDomainValid = true;
    return isEmailValid && isDomainValid;
};

export const isValidPassword = (password) => {
    const length = password.length;
    return length >= 6;
};

export const handleLoginPress = (email, password, setError, setSuccess) => {
    setSuccess(false);
    if (email === '' || password === '') {
        setError('Please Enter Your Credentials');
    }
    else if (!isValidEmail(email)) {
        setError('Please Enter a Valid Email');
    }
    else if (!isValidPassword(password)) {
        setError('Password must be at least 6 characters');
    }
    else {
        setSuccess(true);
        setError('Logged in Successfully');
        console.log('Login');
    }
    return;
};

export const onGoogleButtonPress = (setError,setSuccess) => {
    setSuccess(true);
    setError('Google Login Successful');
    console.log('Google Button Pressed');
};

export const handleSignupPress = (name,email,password,confirmPass,setError,setSuccess) => {
    setSuccess(false);
    if (name === '' || email === '' || password === '' || confirmPass === '') {
        setError('Please Enter Your Credentials');
    }
    else if (!isValidEmail(email)) {
        setError('Please Enter a Valid Email');
    }
    else if (!isValidPassword(password) || !isValidPassword(confirmPass)) {
        setError('Password must be at least 6 characters');
    }
    else if (password !== confirmPass) {
        setError('Passwords do not match');
    }
    else {
        setSuccess(true);
        setError('Logged in Successfully');
        console.log('Login');
    }
    return;
};

export const handlePasswordReset = (email, setError, setSuccess) => {
    setSuccess(false);
    if (email === '') {
        setError('Please Enter Your Email');
    }
    else if (!isValidEmail(email)) {
        console.log('Invalid Email');
        setError('Please Enter a Valid Email');
    }
    else {
        setSuccess(true);
        setError('Login Successful');
    }
    console.log('Password Reset');
};
