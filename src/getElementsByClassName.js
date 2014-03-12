// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, parent, result) {
  if (parent === undefined) parent = document.body.childNodes;
  if (result === undefined) result = [];
  
  _.each(parent, function(value, key, list) {
    // Base case: value is undefined so forget it
    if (value !== undefined) {
      // Base case: value contains the class so add it to results
      if (value.classList !== undefined && value.classList.contains(className))
        result.push(value);
      
      // Recursive case: if the value has children, dive deeper and recurse
      if (value.childNodes !== undefined)
        var childResults = getElementsByClassName(className, value.childNodes, result);
    } 
  });
  
  return result;
};
