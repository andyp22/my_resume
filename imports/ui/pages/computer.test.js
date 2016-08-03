import { chai, assert } from 'meteor/practicalmeteor:chai';

if (Meteor.isClient) {
  import { getTime } from './computer.js';
  
  describe('computer', function () {
    
    describe('helpers', function () {
      it('gets the correct time components', function () {
        let testDate = new Date(2016, 0, 1, 2, 30);
        let time = getTime(testDate);
        assert.isObject(time);
        assert.equal(time.hours, 2);
        assert.equal(time.minutes, 30);
        assert.equal(time.ampm, 'AM');
        
        testDate = new Date(2016, 0, 1, 12, 30);
        time = getTime(testDate);
        assert.isObject(time);
        assert.equal(time.hours, 12);
        assert.equal(time.minutes, 30);
        assert.equal(time.ampm, 'PM');
        
        testDate = new Date(2016, 0, 1, 24, 30);
        time = getTime(testDate);
        assert.isObject(time);
        assert.equal(time.hours, 12);
        assert.equal(time.minutes, 30);
        assert.equal(time.ampm, 'AM');
        
        testDate = new Date(2016, 0, 1, 16, 30);
        time = getTime(testDate);
        assert.isObject(time);
        assert.equal(time.hours, 4);
        assert.equal(time.minutes, 30);
        assert.equal(time.ampm, 'PM');
      });
      
    }); // END helpers
    
  }); // END computer
  
}
