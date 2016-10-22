app.service('Cart', function($cookieStore){
  var cartFromCookies = $cookieStore.get('cart');
  var cart = cartFromCookies || {}
  cart.items = cart.items || []; 
  cart.addItem = function(item) { 
  	cart.items.push(item);
  	$cookieStore.put('cart', cart);
  }

  cart.removeItem = function(item) { 
  	cart.items.pop(item); 
  	$cookieStore.remove('cart');
  	$cookieStore.put('cart', cart);
  }

  cart.isInCart = function(obj) { 
  	 return (cart.items.indexOf(obj) != -1);
  }

  return cart;
});
