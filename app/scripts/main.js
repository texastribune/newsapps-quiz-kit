/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {

    // Add your JS here!
    var buttons = [];
    var totalQs = 0;
    var tally = 0;

    function quizComplete(question) {
      if (question.is(':disabled')) {
        return true;
      }
    }

    $('.response').each( function() {
      buttons.push($(this));
    });

    $('.response').click(function() {
      var question = $(this).closest('article');
      $(this).addClass('selected');

      if ($(this).val() === '1') {
        $(question).find('.correct').show();
        $(question).find('.incorrect').hide();
        tally++;
        totalQs++;
      } else {
        $(question).find('.incorrect').show();
        $(question).find('.correct').hide();
        totalQs++;
      }

      $(question).find('.response').attr('disabled', true).addClass('disabled');

      if (buttons.every(quizComplete)) {
        $('.quiz-results').toggle();
        $('#score').html(tally);
        $('#total-questions').html(totalQs);
      }

      pymChild.sendHeight();

    });

    // if (pymChild) {
    //   pymChild.sendHeight();
    // }
  }

  function load() {
    pymChild = new pym.Child({
      renderCallback: render
    });
  }

  window.onload = load;
})();
