function showTooltip(e) {
  var tooltip = e.target.classList.contains("darkUxToolTip")
      ? e.target
      : e.target.querySelector(":scope .darkUxToolTip");
  tooltip.style.left =
      (e.pageX + tooltip.clientWidth + 10 < document.body.clientWidth)
          ? (e.pageX + 10 + "px")
          : (document.body.clientWidth + 5 - tooltip.clientWidth + "px");
  tooltip.style.top =
      (e.pageY + tooltip.clientHeight + 10 < document.body.clientHeight)
          ? (e.pageY + 10 + "px")
          : (document.body.clientHeight + 5 - tooltip.clientHeight + "px");
}

var tooltips = document.querySelectorAll('.shuffleCategoryWrapper');
for(var i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener('mousemove', showTooltip);
}