(function($){
  $(function(){

    M.AutoInit();

    // Plugin initialization
    $('.dropdown-trigger').dropdown({coverTrigger: false, constrainWidth: false});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel();
    $('.slider').slider();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sidenav({'edge': 'left'});
    $('.datepicker').datepicker({selectYears: 20});
    $('select').not('.disabled').formSelect();
    $('input.autocomplete').autocomplete({
      data: {"Apple": null, "Microsoft": null, "Google": 'http://placehold.it/250x250'},
    });

    // Chips
    $('.chips').chips();
    $('.chips-initial').chips({
      readOnly: true,
      data: [{
        tag: 'Apple',
      }, {
        tag: 'Microsoft',
      }, {
        tag: 'Google',
      }]
    });
    $('.chips-placeholder').chips({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });
    $('.chips-autocomplete').chips({
      autocompleteOptions: {
        data: {
          'Apple': null,
          'Microsoft': null,
          'Google': null
        }
      },
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
