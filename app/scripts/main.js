/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {

    // Add your JS here!
    var buttons = []
    var tally = 0;

    function quizComplete(question) {
      if (question.is(":disabled")) {
        return true;
      }
    }

    $('.response').each( function() {
      buttons.push($(this));
    });

    $('.response').click(function() {
      var question = $(this).parent();
      $(this).addClass('selected');

      if ($(this).val() === '1') {
        $(question).find('.correct').show();
        $(question).find('.incorrect').hide();
        tally++;
      } else {
        $(question).find('.incorrect').show();
        $(question).find('.correct').hide();
      }

      $(question).find('.response').attr('disabled', true);

      if (buttons.every(quizComplete)) {
        $('.quiz-results').toggle();
        $('#score').html(tally);
      }

    });

    if (pymChild) {
      pymChild.sendHeight();
    }
  }

  function load() {
    pymChild = new pym.Child({
      renderCallback: render
    });
  }

  window.onload = load;
})();
