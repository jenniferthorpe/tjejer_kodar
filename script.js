$(function() {
  $('.result').hide();

  var addOption = function() {
  $('.options').append('<input class="inputField"></input>')
}

$('.addButton').click(addOption);
})
