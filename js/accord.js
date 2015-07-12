$(document).ready(function() {
    function close_accord_section() {
        $('.accord .accord-section-title').removeClass('active');
        $('.accord .accord-section-content').slideUp(300).removeClass('open');
    }

    function close_accord_subsection() {
        $('.accord-section-subtitle').removeClass('active');
        $('.accord-section-content .accord-section-subcontent').slideUp(300).removeClass('open');
    }
 
    $('.accord-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accord_section();
        }else {
            close_accord_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accord ' + currentAttrValue).slideDown(300).addClass('open');
        }
 
        e.preventDefault();
    });

    $('.accord-section-subtitle').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accord_subsection();
        }else {
            close_accord_subsection();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accord ' + currentAttrValue).slideDown(300).addClass('open');
        }
 
        e.preventDefault();
    });

});