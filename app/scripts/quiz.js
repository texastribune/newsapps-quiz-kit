/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {

    // Count the number of questions in your quiz
    var totalQs = document.getElementsByClassName('quiz-question').length;

    // Starting score = 0!
    var score = 0;


    function quizComplete() {
      // Tests whether the quiz is complete.
      // Count the number of selected responses
      var selectedResponses = document.getElementsByClassName('selected');
      
      // If selected responses === number of questions, the quiz is complete
      if (selectedResponses.length === totalQs) {
        $('.quiz-results').toggle();
        $('#score').html(score);
        $('#total-questions').html(totalQs);
      }
    }

    $('.response').click(function() {
      // Define which question you're on
      var question = $(this).closest('.quiz-question');

      // Add .selected to the clicked response
      $(this).addClass('selected');

      // Test if answer is correct  
      if ($(this).val() === '1') {
        $(question).find('.correct').show();
        $(question).find('.incorrect').hide();
        // Add 1 to score, if correct.
        score++;
      } else {
        $(question).find('.incorrect').show();
        $(question).find('.correct').hide();
      }

      // Disable all responses for the question answered.
      $(question).find('.response').attr('disabled', true).addClass('disabled');

      // Check if the quiz is completed. If yes, add results HTML.
      quizComplete();
      pymChild.sendHeight();

    });
  }

  function load() {
    pymChild = new pym.Child({
      renderCallback: render
    });
  }

  window.onload = load;
})();
