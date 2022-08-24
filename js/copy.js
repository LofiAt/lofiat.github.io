function copy() {
  navigator.clipboard.writeText("https://youtu.be/" + document.getElementById("shareSpaceLinkButton").ariaLabel);
  document.getElementById('shareSpaceLinkButton').innerHTML = "Share Space ⟶  Link copied!";
  setInterval(
    function(){document.getElementById('shareSpaceLinkButton').innerHTML = "Share Space ⟶"},
    5000
  );
}