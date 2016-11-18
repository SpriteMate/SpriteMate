//TESTING
var Nightmare = require('nightmare'),
		should = require('chai').should();

describe('Gallery Page', function() {
	it('should display # of images in database', function () {
		Nightmare({ show : true })
			.goto('http://localhost:9001/gallery')
			.wait('.thumbnail')
			.evaluate(function () {
				return document.querySelector('.thumbnail img').src
			})
			.end()
			.then(function (result) {
				// console.log(result)
				result.should.equal('http://localhost:9001/public/assets/images/megaman_jump.jpg');
					done();
			})
			.catch(function (error) {
				console.error('Search failed:', error);
			});
	});
});