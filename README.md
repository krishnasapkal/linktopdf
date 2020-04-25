
Easy way to add links to existing PDF


## Instructions

* [GetStarted](#getstarted)

## GetStarted

```bash
npm i hummus-recipe --save
```

## Create a new PDF

```javascript
const linkToPdf = require('linktopdf');



linkToPdf(text,srcPath,destPath,{       //example linkToPdf('click here', './existing.pdf' , './output.pdf',{})
  fontSize : 13,  // Font size of the text
  textX : 10,     // X of text
  textY : 20,     // Y of text
  linkAreaLeft:8,     // Ponints of the reactangle in with link will be clickable ideally it should be around the text
  linkAreaBottoom:8,  // Ponints of the reactangle in with link will be clickable ideally it should be around the text
  linkAreaTop:100,    // Ponints of the reactangle in with link will be clickable ideally it should be around the text
  linkAreaRight:50,   // Ponints of the reactangle in with link will be clickable ideally it should be around the text
  fontFilePath : __dirname + './Helvetica 400.ttf',  // Path to the font file
  fontColor : 'black',  // color of the font
  underline:true,     // if text should be underlined or not
  toAllPages : true,  //when you want to add link to all pages
  fromPage:null,      //optional only when you want to add between some pages
  toPage:null,        //optional only when you want to add between some pages
  specificPages:[],   //Optional only if you want to add link to specific pages
  link:"example.com"  // use #begin to go the begining of the page
})


```
