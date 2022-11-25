function popUp(query,w,h) {
  var x = (screen.width-w)/2;
  var y = (screen.height-h)/2;
  return window.open(
    "http://www.ekaristi.org/bible/bdb.php?q=" + query + "&f=1", 
    "BDB", 
    "width="   + w + "," +
    "height="  + h + "," +
    "screenX=" + x + "," +
    "screenY=" + y + "," +
    "left="    + x + "," +
    "top="     + y + "," +
    "scrollbars,alwaysRaised,resizable"
  );
}