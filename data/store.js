//store
  function store() {
	this.products = [
	    new product("APL", "The Eva Gabor", "Money can't buy you class", 12, 90, 0, 2, 0, 1, 2),
	    new product("AVC", "The Eva Longoria", "Something about her...", 16, 90, 0, 1, 1, 1, 2),
	    new product("BAN", "The Eva Marie Saint", "Holy Holy", 4, 120, 0, 2, 1, 2, 2),
	    // more products…
	    new product("WML", "The Eva Peron", "Perdon, Peron", 4, 90, 4, 4, 0, 1, 1),
	    new product("APL", "The Eva Gabor", "Money can't buy you class", 12, 90, 0, 2, 0, 1, 2),
	    new product("AVC", "The Eva Longoria", "Something about her...", 16, 90, 0, 1, 1, 1, 2),
	    new product("BAN", "The Eva Marie Saint", "Holy Holy", 4, 120, 0, 2, 1, 2, 2),
	    // more products…
	    new product("WML", "The Eva Peron", "Perdon, Peron", 4, 90, 4, 4, 0, 1, 1)
	  ];
	  this.dvaCaption = ["Negligible", "Low", "Average", "Good", "Great" ];
	  this.dvaRange = ["below 5%", "between 5 and 10%", "above 40%"];
	}

	store.prototype.getProduct = function (sku) {
	  for (var i = 0; i < this.products.length; i++) {
	    if (this.products[i].sku == sku)
	      return this.products[i];
	  }
	  return null;
	};