// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (object) {
  // base case: object is a primitive, null or undefined, so you're done, return it.
  if (object === undefined || typeof object === 'function') return '';
  if (object === null) return 'null';
  if (typeof object === 'string') return '"' + object + '"';
  if (typeof object !== 'object') return '' + object;
  
  // recursive case: object is a collection, recurse over its elements.
  var result;
  if (object instanceof Array) {
    result = '[';
    _.each(object, function(element, index, list) {
      if (index > 0) result += ',';
      result += stringifyJSON(element);
    });
    return result += ']';
  } else {
    result = '{';
    var multipleElements = false;
    _.each(object, function(value, key, list) {
      var stringifiedValue = stringifyJSON(value);
      if (stringifiedValue !== '') {
        if (multipleElements) result += ',';
        multipleElements = true;
      
        result += stringifyJSON(key) + ':' + stringifiedValue;
      }
    });
    return result += '}';
  }
  
};
