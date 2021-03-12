function opennav(){
  document.querySelector('#nav').style.height = "210px";
  document.querySelector('#nav').style.zIndex = '6';
  document.querySelector('#nav').style.top = '120px';
}
function closenav(){
   document.querySelector('#nav').style.height = "0px";
   document.querySelector('#nav').style.zIndex = '-10';
     document.querySelector('#nav').style.top = '0px';
}
function live(){
  var editor = document.querySelector('#editor').value;
  document.querySelector('iframe').srcdoc = editor;
  }
