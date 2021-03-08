function $(selector)
{
  const self =
  {
    element: document.querySelector(selector),
    html: ()=> self.element,
    on:(event, callback)=>{
      self.element.addEventListener(event,callback)
    },
    hide: ()=>{
      self.element.style.display = 'none';
    },
    show: ()=>{
      self.element.style.display = 'block';
    },
    attr: (name,value)=>{
      if(value == null)
        self.element.getAttribute(name)
      else
      self.element.setAttribute(name,value)
    },
    text: (value)=>{
      self.element.innerHTML = (value)
    },
    intext: (value)=>{
      self.element.innerText = (value)
    },
   val: () => {
     self.element.value
   },
    linkto: (event,name,href,value)=>{
      self.element.innerHTML = "<a" +" href='" + (href) + "'" +(event) +"='"+(name) + "'>" + (value) + "</a>"
    },
    textcolor: (value)=>{
      self.element.style.color = (value)
    },
    bgcolor: (value)=>{
      self.element.style.background = (value)
    },
    Halign: (value) => {
      self.element.style.textAlign = (value)
    },
    button: (click,event,type,value)=>{
      self.element.innerHTML = "<button type='"+(type) +"'"+(click)+"='"+ (event) + "'>" + (value) + "</button>"
    },
    popup: (value)=>{
      self.element = alert((value))
    },
    style: (styles)=>{
      for(let key in styles){
        self.element.style[key] = styles[key]
      }
      return self
    },
    Log: (value)=>{
      self.element = console.log((value))
    },
    error: (value)=>{
      self.element = console.error((value))
    },
    popMessage: (value)=>{
      self.element = prompt((value))
    },
    question: (value)=>{
      self.element = confirm((value))
    },
    image: (type,name,src,alt)=>{
      self.element.innerHTML = "<img src='"+(src) +"'"+(type)+"='"+ (name) + "' alt='"+ (alt) +"'>"
    },
    //Animation
    fadeOut: (time,speed) => {
      self.element.style.opacity = 0;
      self.element.style.transition = (speed) + "s";
      setTimeout(function() {
        self.element.style.display = "none";
      },(time));
    },
    fadeIn: (time,speed) => {
      self.element.style.display = "block";
      self.element.style.transition = (speed) + "s";
      setTimeout(function() {
        self.element.style.opacity = 1;
      },(time));
    },
  }
  return self
}