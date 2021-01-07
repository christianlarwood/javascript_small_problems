function myBind(func, obj) {
  return function(...args) {
    return func.apply(obj, args);
  };
}

// altered to support partial function application
function myBind(func, obj, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);
    
    return func.apply(obj, fullArgs);
  };
}