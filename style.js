var $inp = $(".input-cart-number");

$inp.on({
 input: function(ev) {
    $t = $(this);
  if($t.val().length > 3) {
    $inp.eq($inp.index($t) + 1).focus();
  }
 },
 keydown: function(ev) {
  var i = $inp.index(this);
  if(ev.which===8 && !this.value && i) {
    $inp.eq(i - 1).focus();
  }
 },
 paste: function(e) {

    var pastedData = e.originalEvent.clipboardData.getData('num');
    var pastedChars = pastedData.split("");
    
    var curIndex = $inp.index(this)
    
    for (var i=0; i < pastedChars.length; i++) {
      var char = pastedChars[i]
      $inp.eq(curIndex + i).val(char).focus();
    }
 }
});