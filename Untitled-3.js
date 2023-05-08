function markVisited(country) {
    var li = document.getElementById(country);
    var img = li.getElementsByTagName('img')[0];
    img.setAttribute('src', 'visited.png');
    img.setAttribute('alt', 'Visited');
    li.innerHTML += ' Visited';
  }