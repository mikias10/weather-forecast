class ItemsService {
	/*@ngInject*/
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
	}

	getItems(cityName) {
		const url = 'http://api.openweathermap.org/data/2.5/forecast?q='+cityName+',ca&mode=json&APPID=8caa3a62ba1f3b52d931888f38d1bc75&units=imperial';
		const res = this.$http.get(url);
		return this.$q.resolve(res);
	}
}

export default ItemsService;
