(function ($) {
  'use strict';
  
var event = ('ontouchstart' in window) ? 'click' : 'mouseenter mouseleave';

$('.design-section figure').on(event, function () {
    $(this).toggleClass('open');
});

$(document).ready(function() {
  $("input.hubcolor").click(function() {
    var imgUrl = $(this).attr('rel');
    $("#hubcolor").html("<img src='" + imgUrl + "' class='wheelpiecewidth' />");
    $("#hubcolor2").html("<img src='" + imgUrl + "' class='wheelpiecewidth2' />");
  });
  $("input.rimcolor").click(function() {
    var imgUrl = $(this).attr('rel');
    $("#rimcolor").html("<img src='" + imgUrl + "' class='wheelpiecewidth' />");
    $("#rimcolor2").html("<img src='" + imgUrl + "' class='wheelpiecewidth2' />");
  });
  $("input.spokecolor").click(function() {
    var imgUrl = $(this).attr('rel');
    $("#spokecolor").html("<img src='" + imgUrl + "' class='wheelpiecewidth' />");
    $("#spokecolor2").html("<img src='" + imgUrl + "' class='wheelpiecewidth2' />");
  });
    $("input.nipplecolor").click(function() {
    var imgUrl = $(this).attr('rel');
    $("#nipplecolor").html("<img src='" + imgUrl + "' class='wheelpiecewidth' />");
    $("#nipplecolor2").html("<img src='" + imgUrl + "' class='wheelpiecewidth2' />");
  });
      $("input.rw_design").click(function() {
    var imgUrl = $(this).attr('rel');
    $("#rw_design").html("<img src='" + imgUrl + "' class='wheelpiecewidth' />");
    $("#rw_design2").html("<img src='" + imgUrl + "' class='wheelpiecewidth2' />");

  });
  
});

}(jQuery));