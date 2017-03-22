import Ember from 'ember';

export default Ember.Service.extend({
	init() {
		if(!this.get('cachedMaps')){
			this.set('cachedMaps', MapUtil.create());
		}
		if(!this.get('MapUtil')){
			this.set('MapUtil', MapUtil.create());
		}
	},

	getElement(location) {
		let camelizedLocation = location.camelized();
		let element = this.get(`cachedMaps.${camelizedLocation}`);
		if(!element) {
			element = this.createMapElement();
			this.get('mapUtil').createMap(element, location);
			this.set(`cachedMaps.${camelizedLocation}`, element);
		}
		return element;
	},

	createMap(){
		let element = document.createElement('div');
		element.className = 'map';
		return element;
	}   
	
});
