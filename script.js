    var bt = document.getElementById("search-button")
   bt.onclick= function () {
    var inp = $("#search-bar").val()
    inp = inp.charAt(0).toUpperCase() + inp.slice(1).toLowerCase();
   console.log(inp);
    var countryList = ['France','Italy','Maxico','Spain','Turkiye','United State','Greece','Austria','Germany','United Arab Emirates']
    if (countryList.includes(inp)) {
      alert('Country ' + inp + ' found')
    } else {
      alert('Country ' + inp + ' not found')
    }
  }

  
