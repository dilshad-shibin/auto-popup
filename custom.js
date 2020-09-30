$(document).ready(function() {
    function showWindow() {
        $('#main').show();
        // stop scroll
        $('html body').css('overflow', 'hidden')
    }
    // showWindow()

    function hideWindow() {
        $('#main').hide();
        // on scroll
        $('html body').css('overflow', 'scroll')
    }
    // hideWindow()

    // now call function automatically after some time 

    setTimeout(showWindow, 2000)


    // close after click
    $('#close').click(function() {
        hideWindow()
    })
})