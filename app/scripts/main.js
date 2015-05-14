/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {

    $('#start').show();
    // Add your JS here!

    $('.response').click(function() {
      var question = $(this).closest('article');
      var next = $(this).attr('data-link');

      $(this).addClass('selected');
      $('#' + next).show();

      console.log(next);


      $(question).find('.response').attr('disabled', true).addClass('disable');

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
