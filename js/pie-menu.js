/*
 * Author: Jan Pretzel 
 */

$(document).ready(function() {
    $("ul.pie-menu").each(function() {
        var items       = $(this).children("li");
        
        // should the radius have an offset?
        var offset      = 0;
        
        // the radius of a circle on wich the items will be placed
        var radius      = $(this).outerWidth() / 2 + offset;
        
        // need to add this to x and y because we pretend that the middle
        // of our circle is at (0,0)
        var innerRadius = $(this).width() / 2;
        
        var step        = 2 * Math.PI / items.length;
        
        // let the first item be at the top
        var rotation    = 90 / 180 * Math.PI;
        
        items.each(function(i) {
            var x = (Math.cos(i * step - rotation) * radius - $(this).outerWidth() / 2) + innerRadius;
            var y = (Math.sin(i * step - rotation) * radius - $(this).outerHeight() / 2) + innerRadius;
            $(this).css({
                'left'  : x + 'px',
                'top'   : y + 'px'});
        });
    });
});
