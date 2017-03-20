import Ember from 'ember';

const communityPropertyTypes = [
	'Condo',
	'Townhouse',
	'Apartment'
];

export function rentalPropertyType(params/*, hash*/) {
  if(communityPropertyTypes.include(type)) {
  	return 'Community';
  };

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
