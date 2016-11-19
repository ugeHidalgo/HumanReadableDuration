describe('Kata', function() {
  
  beforeEach(function() {
  });

  it('should be able to test.', function() {
    expect(true).toBeTruthy();
  });

  it('should throw error when negative values.', function() {
    var test = function() {
      return formatDuration(-1);
    }
    expect(test).toThrow();
  });

  it('should return "now" when 0 seconds', function() {
    expect(formatDuration(0)).toEqual('now','Should return "now".');
  });

  it('should return "1 second" when 1', function() {
    expect(formatDuration(1)).toEqual('1 second','Should return "1 second".');
  });

  it('should return "59 seconds" when 59', function() {
    expect(formatDuration(59)).toEqual('59 seconds','Should return "59 seconds".');
  });

  it('should return "1 minute" when 60', function() {
    expect(formatDuration(60)).toEqual('1 minute','Should return "1 minute".');
  });

  it('should return "1 minute and 2 seconds" when 62', function() {
    expect(true).toBeFalsy('Not implemented test.')
  });

  it('should return "2 minutes" when 120', function() {
    expect(true).toBeFalsy('Not implemented test.')
  });

  it('should return "1 hour" when 3600', function() {
    expect(true).toBeFalsy('Not implemented test.')
  });

  it('should return "1 hour, 1 minute and 2 seconds" when 3662', function() {
    expect(true).toBeFalsy('Not implemented test.')
  });
});