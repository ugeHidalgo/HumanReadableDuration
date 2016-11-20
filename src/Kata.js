function formatDuration(seconds) {
  var qty = 0, 
      values = [];

    if (seconds < 0) throw {
      name: "Negative value",
      message: "Not able to use negative values."
    }
    if (seconds === 0) return 'now';
 
    qty = Math.floor(seconds/31536000);
    if (qty > 0) {
      values.push(processUnit('year',qty));
    }

    qty = Math.floor((seconds%31536000)/86400);
    if (qty > 0) {
      values.push(processUnit('day',qty));
    }

    qty = Math.floor((seconds%86400)/3600);
    if (qty > 0) {
      values.push(processUnit('hour',qty));
    }
    
    qty = Math.floor((seconds%3600)/60);
    if (qty > 0) {
      values.push(processUnit('minute',qty));
    }

    qty = (seconds%3600)%60;
    if (qty > 0) {
      values.push(processUnit('second',qty));
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