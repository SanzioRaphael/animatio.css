/*Selected Options*/
$(document).ready(function() {
  $('#options, #options2, #option3, #option4').change(function() {
    var selectedClass = $(this).val();
    $('#animatio-class-view').text(selectedClass);
    $('#animatio-text').removeClass().addClass(selectedClass);
  });
});
