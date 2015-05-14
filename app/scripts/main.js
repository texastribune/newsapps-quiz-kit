/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {

    $('#start').show();
    // Add your JS here!

    $('.option').click(function() {
      var question = $(this).closest('article');
      var next = $(this).attr('data-link');

      $(this).addClass('selected');
      $(question).find('.option').off('click').addClass('disable');
      $('#' + next).show();

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
