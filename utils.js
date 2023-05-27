const debounce = (func, delay = 1000) => {
  //1000 is a default value for delay
  let timeoutId;
  return (...args) => {
    //   return (arg1, arg2, arg3) => { //this is the same than the line above
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
      //   func(arg1,arg2,arg3); //this is the same than the line above
    }, delay);
  };
};
