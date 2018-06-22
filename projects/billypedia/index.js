/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {// use data as an object 
        // YOUR CODE BELOW HERE //

        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
         //let topRated = data.discography.topRated;
         //_.forEach(topRated, function(recording) {
         //    console.log(recording);
         //});
         
        $('body').css("background-color", '#9400D3');
        $('main').css("background-color", '#E6E6FA').css('font-family', 'Courier New').css('font-size', '18px');
        $('nav').css('background-color', '#BA55D3');
        
        $('#section-bio p:last-child').remove();
        
        $('#quotes').css('font-style', 'italic');
        $('h3').css('text-align', 'center');
        

        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
