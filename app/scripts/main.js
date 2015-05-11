/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {

    // Add your JS here!

    var tally = 0;

    $('.response').click(function() {
      var question = $(this).parent();

      if ($(this).val() === '1') {
        $(question).find('.correct').show();
        $(question).find('.incorrect').hide();
        tally++;
      } else {
        $(question).find('.incorrect').show();
        $(question).find('.correct').hide();
      }
      $(question).find('.response').attr('disabled', true);
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
