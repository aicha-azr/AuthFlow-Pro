const handelErrors = (err) => {
    const errors = {
      username: "",
      email: "",
      password: "",
    };
    if (err.errors) {
      Object.values(err.errors).forEach((error) => {
    
          errors[error.path] = error.message;
        
      });
    }
    return errors;
  };
  
  module.exports = handelErrors;