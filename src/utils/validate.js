export const checkValidData = (username, email,password, isSignIn) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     if (!isSignIn) {
    const isNameValid = /^[a-zA-Z0-9_-]{3,16}$/.test(username);
    if (!isNameValid) return "Username must be 3–16 chars: letters, numbers, _ or -";
  }
    if(!isEmailValid) return "Email id is not valid.";
    if(!isPasswordValid) return "Password must be at least 8 characters long and include uppercase, lowercase letters and numbers.";
    

    return null;    
}