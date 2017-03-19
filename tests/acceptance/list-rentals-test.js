import { test } from 'qunit';
import moduleForAcceptance from 'rent-car-tutorial/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');


test('should redirect to rentals route', function(assert){
	visit('/');
	andThen(function(){
		assert.equal(currentURL(), '/rentals', 'should redirect automatically');
	});
});


test('should list available rentals', function (assert){
	visit('/');
	andThen(function(){
		assert.equal(find('.listing').length, 3, 'should see 3 listing');
	});
});

test('should link to information about the company', function (assert){
	visit('/');
	andThen(function(){
		assert.equal(currentURL(), '/about', 'should navigate to about');
	});
});

test('should link to contact information', function(assert){
	visit('/');
	andThen(function(){
		assert.equal(currentURL(), '/contact', 'should navigate to contact')
	});
});

test('should filter the list of rentals by city', function(assert){
	visit('/');
	fillIn('.list-filter input', 'seattle');
	keyEvent('.list-filter input', 'keyup', 69);
	andThen(function(){
		assert.equal(find('.listing').length, 1, 'should show 1 listing');
		assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contact 1 listing with location Seattle');
	});
});

test('should show details for a specific rental', function(assert){
	visit('/rentals');
	click('a:contains("Grand Old Mansion")');
	andThen(function(){
		assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
		assert.equal(find('show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
		assert.equal(find('.description').length, 1,'should list a description of the property');
	});
});

