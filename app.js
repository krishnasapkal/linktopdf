const hummus = require('hummus');
 defaultOptions = {
  fontSize : 13,
  textX : 10,
  textY : 20,
  linkAreaLeft:8,
  linkAreaBottoom:8,
  linkAreaTop:100,
  linkAreaRight:50,
  fontFilePath : __dirname + './Helvetica 400.ttf',
  fontColor : 'black',
  underline:true,
  toAllPages : true,
  fromPage:null,
  toPage:null,
  specificPages:[],
  link:"#begin"
}

exports.addLinkToPdf = (text,src,dest,options = {}) => {
const pdfReader = hummus.createReader(src);
const pages = pdfReader.getPagesCount()
var pdfWriter = hummus.createWriterToModify(src, {
  modifiedFilePath:'./temp.pdf'
});

for(let i = 0 ; i<pages;i++){
  if(options.fromPage && options.toPage){
    if(i<fromPage - 1 || i>toPage - 1)
    continue;
  }

  if(options.specificPages &&  options.specificPages.length > 0){
    if(!options.specificPages.includes(i)){
      continue;
    }
  }
  var pageModifier = new hummus.PDFPageModifier(pdfWriter,i);
  pageModifier.attachURLLinktoCurrentPage(
  options.link || '#begin',
  options.linkAreaLeft || defaultOptions.linkAreaLeft, 
  options.linkAreaBottoom || defaultOptions.linkAreaBottoom,
  options.linkAreaRight || defaultOptions.linkAreaRight,
  options.linkAreaTop || defaultOptions.linkAreaTop
  ) 
  pageModifier.writePage();
}
pdfWriter.end();

const pdfWriter1 = hummus.createWriterToModify('./temp.pdf', {
  modifiedFilePath:dest
});

for(let i = 0 ; i<pages;i++){
  var pModifier = new hummus.PDFPageModifier(pdfWriter1,i);
  const context = pModifier.startContext().getContext();
  context.writeText(
    text ||'Sample Text',
    options.textX || defaultOptions.textX,options.textY || defaultOptions.textY,
    {font:pdfWriter1.getFontForFile(options.fontFilePath || __dirname + './Helvetica 400.ttf'),size:12,color:options.fontColor || 'black',underline:options.underline || true}
  );
  pModifier.endContext().writePage();
}
pdfWriter1.end();
return 'Success'
}