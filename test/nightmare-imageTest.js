'use strict';

const Nightmare = require('nightmare');
const should = require('chai').should();

describe('SpriteMate', function() {
  this.timeout(3000);
  it('should load the proper image when displaying the page', function(done) {
    let nightmare = new Nightmare({
      show: false
    });
    nightmare
      .goto('http://localhost:9001/gallery')
      .wait('.thumbnail')
      .evaluate(function() {
        return document.querySelector('.thumbnail img').src
      })
      .end()
      .then(function(result) {
        result.should.equal('http://localhost:9001/public/assets/images/megaman_jump.jpg');
        done();
      })
      .catch(function(err) {
        console.error(err);
      });
  }); 
}); 