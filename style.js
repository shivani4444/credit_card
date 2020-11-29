
//paste
$('#tb0').on('paste',function(){
  var element = this;
   setTimeout(function () {
     var splittedString = $('#tb0').val().match(/.{1,4}/g)
     for(var i=0; i<splittedString.length; i++){
         $('#tb' + i).val(splittedString[i]).focus();
     }
   },0);
 })

 var $inp = $(".input-cart-number");
$inp.on({
 input: function(ev) { //focus next
    $t = $(this);
  if($t.val().length > 3) {
    $inp.eq($inp.index($t) + 1).focus();
  }
 },
 keydown: function(ev) { //when delete focus previous
  var i = $inp.index(this);
  if(ev.which===8 && !this.value && i) {
    $inp.eq(i - 1).focus();
  }
 }
});