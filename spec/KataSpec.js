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

  describe('processing seconds', function() {
    it('should return "now" when 0 seconds', function() {
      expect(formatDuration(0)).toEqual('now','Should return "now".');
    });

    it('should return "1 second" when 1', function() {
      expect(formatDuration(1)).toEqual('1 second','Should return "1 second".');
    });

    it('should return "59 seconds" when 59', function() {
      expect(formatDuration(59)).toEqual('59 seconds','Should return "59 seconds".');
    });
  });

  describe('processing minutes', function() {
    it('should return "1 minute" when 60', function() {
      expect(formatDuration(60)).toEqual('1 minute','Should return "1 minute".');
    });

    it('should return "1 minute and 2 seconds" when 62', function() {
      expect(formatDuration(62)).toEqual('1 minute and 2 seconds','Should return "1 minute and 2 seconds".');
    });

    it('should return "2 minutes" when 120', function() {
      expect(formatDuration(120)).toEqual('2 minutes','Should return "2 minutes".');
    });

    it('should return "59 minutes and 59 seconds" when 120', function() {
      expect(formatDuration(3599)).toEqual('59 minutes and 59 seconds','Should return "59 minutes and 59 seconds".');
    });
  });

  describe('processing hours', function() {

    it('should return "1 hour" when 3600', function() {
      expect(formatDuration(3600)).toEqual('1 hour','Should return "1 hour".');
    });

    it('should return "1 hour and 1 second" when 3601', function() {
      expect(formatDuration(3601)).toEqual('1 hour and 1 second','Should return "1 hour and 1 second".');
    });

    it('should return "1 hour and 2 seconds" when 3602', function() {
      expect(formatDuration(3602)).toEqual('1 hour and 2 seconds','Should return "1 hour and 2 seconds".');
    });

    it('should return "1 hour and 1 minute" when 3660', function() {
      expect(formatDuration(3660)).toEqual('1 hour and 1 minute','Should return "1 hour and 1 minute".');
    });

    it('should return "1 hour and 2 minutes" when 3720', function() {
      expect(formatDuration(3720)).toEqual('1 hour and 2 minutes','Should return "1 hour and 2 minutes".');
    });

    it('should return "1 hour, 1 minute and 1 second" when 3661', function() {
      expect(formatDuration(3661)).toEqual('1 hour, 1 minute and 1 second','Should return "1 hour, 1 minute and 1 second".');
    });

    it('should return "1 hour, 1 minute and 2 seconds" when 3662', function() {
      expect(formatDuration(3662)).toEqual('1 hour, 1 minute and 2 seconds','Should return "1 hour, 1 minute and 2 seconds".');
    });

    it('should return "1 hour, 2 minutes and 1 second" when 3721', function() {
      expect(formatDuration(3721)).toEqual('1 hour, 2 minutes and 1 second','Should return "1 hour, 2 minutes and 1 second".');
    });

    it('should return "1 hour, 2 minutes and 2 seconds" when 3722', function() {
      expect(formatDuration(3722)).toEqual('1 hour, 2 minutes and 2 seconds','Should return "1 hour, 2 minutes and 2 seconds".');
    });

    it('should return "2 hours" when 7200', function() {
      expect(formatDuration(7200)).toEqual('2 hours','Should return "2 hours".');
    });

    it('should return "2 hours and 1 second" when 7201', function() {
      expect(formatDuration(7201)).toEqual('2 hours and 1 second','Should return "2 hours and 1 second".');
    });

    it('should return "2 hours and 2 seconds" when 7202', function() {
      expect(formatDuration(7202)).toEqual('2 hours and 2 seconds','Should return "2 hours and 2 seconds".');
    });

    it('should return "2 hours, 1 minute and 1 second" when 7261', function() {
      expect(formatDuration(7261)).toEqual('2 hours, 1 minute and 1 second','Should return "2 hours, 1 minute and 1 second".');
    });

    it('should return "2 hours, 1 minute and 2 second" when 7261', function() {
      expect(formatDuration(7262)).toEqual('2 hours, 1 minute and 2 seconds','Should return "2 hours, 1 minute and 2 seconds".');
    });

    it('should return "2 hours, 2 minutes and 1 second" when 7261', function() {
      expect(formatDuration(7321)).toEqual('2 hours, 2 minutes and 1 second','Should return "2 hours, 2 minutes and 1 second".');
    });

    it('should return "2 hours, 2 minutes and 2 seconds" when 7261', function() {
      expect(formatDuration(7322)).toEqual('2 hours, 2 minutes and 2 seconds','Should return "2 hours, 2 minutes and 2 seconds".');
    });
  });
});