function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
    if (predicate(element)) {
    acc.push(element);
    }
    });
    return acc;
    }
function each(array, func) { 
        for (var i = 0; i < array.length; i++) { 
              func(array[i], i); 
        } 
  }
   var bt = document.getElementById("search-button")
   bt.onclick= function () {
    var inp = $("#search-bar").val()

   console.log(inp);
    var countryList = ['France','Italy','Maxico','Spain','Turkiye','United State','Greece','Austria','Germany','United Arab Emirates']
    if (countryList.includes(inp)) {
      alert('Country ' + inp + ' found')
    } else {
      alert('Country ' + inp + ' not found')
    }
  }

  
