# NoreJs

### NoreJS is a JavaScript library

#### Use the library by copying this link

### https://tobithedev.github.io/NoreJs/nore.js
[![Netlify Status](https://api.netlify.com/api/v1/badges/9627be6b-c3e3-49db-b1bc-8292ce869c1d/deploy-status)](https://app.netlify.com/sites/norejs/deploys)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/Tobithedev/norejs)

# Usage
```html 
 <body>
  <h1></h1>
</body>
```
```js 
 $("h1").html("Hello World");
```
# Creating Dom Element with Nore V2
```js 
 var App = $.createElement({
    tag: 'div',
    props:{ 
      class: 'red',
      onclick: 'alert(\'Yooo!\')'
    },
    children: [$.createElement({
      tag: 'h1',
      props:{
        style: 'font-size: 30px'
      },
      children: 'Hello World'
    })]
  });

  $.mount(App,document.body)
```


 

