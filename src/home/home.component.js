class HomeController {
  /*@ngInject*/
  constructor(ItemsService) {
    this.itemsService = ItemsService;
    this.items = [];
    this.city = {
      name: ''
    }
    this.selctedCity = '';
    this.inCelcius = true;
    this.inFahrenheit = false;
  }

  $onInit() {
    this.city.name = 'Toronto';
    this.itemsService
      .getItems(this.city.name)
      .then((items) => {
        this.items = items.data.list;
        console.log(this.items);
      });

    this.selectedCity = this.city.name;
    this.city.name = '';
    // TODO: error handling

  }

  searchByCity(name) {
    if (name) {
      this.itemsService
        .getItems(name)
        .then((items) => {
          this.items = items.data.list;
        });

      this.selectedCity = this.city.name;

      // TODO: error handling
      this.city.name = '';
    }
  }

  convertToCelcius() {
    if (this.items) {
      this.items.map(function(item) {
        if (item.main.temp) {
          item.main.temp = (((item.main.temp - 32) * 5) / 9).toFixed(2);
          item.main.temp_max = (((item.main.temp_max - 32) * 5) / 9).toFixed(2);
          item.main.temp_min = (((item.main.temp_min - 32) * 5) / 9).toFixed(2);          
        }
      });
      this.inCelcius = false;
      this.inFahrenheit = true;
    }
  }

  convertToFahrenheit() {
    if (this.items) {
      this.items.map(function(item) {
        if (item.main.temp) {
          item.main.temp = ((item.main.temp * (9 / 5)) + 32.0).toFixed(2);
          item.main.temp_max = ((item.main.temp_max * (9 / 5)) + 32.0).toFixed(2);
          item.main.temp_min = ((item.main.temp_min * (9 / 5)) + 32.0).toFixed(2);
        }
      });
      this.inFahrenheit = false;
      this.inCelcius = true;
    }
  }
}

const homeComponent = {
  template: require('./home.html'),
  controller: HomeController
};

export default homeComponent;
