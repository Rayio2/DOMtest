var button=$('.button')
button.on('click',function(x){
  var on=$('.on')
  if(on.css('display')==='none')
  on.css('display','block')
  else
  on.css('display','none')
  x.stopPropagation();
})

$('.on').on('click',function(x){
  x.stopPropagation();
})
          
$('html').on('click',function(){
  var on=$('.on')
  if(on.css('display')==='none')
  on.css('display','block')
  else
  on.css('display','none')
})