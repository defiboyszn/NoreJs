function opennav(){
  $('#nav').height("210px");
  $('#nav').style({
    zIndex: "6",
    top: "70px"
  });
}
function closenav(){
   $('#nav').height("0px");
   $('#nav').style({
       zIndex: "-10",
       top: "0px"
     });
}
function live(){
  var editor = document.querySelector('#editor').value;
  document.querySelector('iframe').srcdoc = editor;
  }
