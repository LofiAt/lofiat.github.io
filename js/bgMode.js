function replaceColor(color1, color2) {
  var keys = Object.values(window.getComputedStyle($('html').get(0)));
  var filteredKeys = keys.filter(function (key){return key.indexOf('color') > -1});
  var colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color1).splice(1,3); 
  var rgb = 'rgb(' + colors.map(function (color){return parseInt(color, 16)}).join(', ') + ')';
  $("*").each(function (index, element) {
      filteredKeys.forEach(function(key) {
          if ($(element).css(key) == rgb) {
              $(element).css(key, color2);
          }
      });
  });
}