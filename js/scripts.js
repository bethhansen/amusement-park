$(function(){
  var height = parseInt(prompt("How tall are you? (Inches)"));

  if (height < 48) {
      $(".tooshort").show()
  }
  else if (height > 80){
    $("#fair").show();
    $(".ferriswheel").show();
    $(".rollercoaster").show();
  }
  else  {
    $(".merry-go-round").show();
    $(".teacups").show();
    $("#fair").show();
    $(".ferriswheel").show();
    $(".rollercoaster").show();
  }

});
