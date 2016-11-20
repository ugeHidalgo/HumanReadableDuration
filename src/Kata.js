function formatDuration(seconds) {
  var s = 0, 
      m = 0, 
      h = 0,
      values = [];

    if (seconds < 0) throw {
      name: "Negative value",
      message: "Not able to use negative values."
    }
    if (seconds === 0) return 'now';
 
    h = Math.floor(seconds/3600);
    if (h >0) {
      values.push(processUnit('hour',h));
    }
    
    m = Math.floor((seconds%3600)/60);
    if (m >0) {
      values.push(processUnit('minute',m));
    }

    s = (seconds%3600)%60;
    if (s >0) {
      values.push(processUnit('second',s));
    }

    return joinValues(values);
}

var processUnit = function (unit,qty) {
  var result = '';

  if (qty > 0) {
    result += qty + ' ' + unit;
    if (qty > 1){
      result += 's';
    }
  }
  return result;
};

var joinValues = function (values){
  var i,
      joinChar,
      result = '';

  for(var i=0; i<values.length-1; i++ ){
      joinChar = (values.length > 2 && i < values.length-2 )  ? ', ' : ' '
      result+= values[i] + joinChar;
  }
  if (values.length > 1) result += 'and '
  result += values[values.length-1];

  return result;
}