var newWindow;

function loadHTML(html){
  newWindow = window.open("","newWindow");
  newWindow.document.write(html);
  newWindow.document.close();
}
