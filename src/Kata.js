function formatDuration(seconds) {
  var sec = 0,
      result;

    if (seconds < 0 ) throw {
      name: "Negative value",
      message: "Not able to use negative values."
    }
    if (seconds === 0) return 'now';

    sec = seconds;
    if (sec > 0) {
      result = seconds + " second";
      if (seconds > 1) {
          result += 's';
      }
    }

    return result;
}