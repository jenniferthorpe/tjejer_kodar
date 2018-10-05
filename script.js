$(function() {
  $('.result').hide();

  var addOption = function() {
  $('.options').append('<input class="inputField"></input>')
}

$('.addButton').click(addOption);

var optionList = []
var submit = function() {
  $(".optionBox").hide();
  $(".result").css("display", "flex");
  $("input").each(function(){
    optionList.push($(this).val())
  })
  var winner = optionList[Math.floor(Math.random() * optionList.length)]
  console.log(winner)
  $(".result").text(winner)
}
$(".goButton").click(submit)
})
