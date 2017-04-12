$(document).ready(function(){
    $('.slide').height($(window).height());

    $(window).resize(function(){
        $('.slide').height($(window).height());
    });

    $('.bxslider').bxSlider({
        startSlide : 1,
        pager : false,
        preloadImages : 'all',
        nextSelector : '.next-wrapper'
    });

    //Mail sending
    $('body').on('click','#btn-submit', function(){
        var name = $('#name').val(),
            email = $("#email").val(),
            phone = $("#phone").val(),
            message = $("#message").val(),
            errors = 0;

        $('.error-messages').empty();

        if(name === ''){
            $('.error-messages').append('<li><p class="error">Name is required</p></li>')
            errors += 1;
        }

        if(!validateEmail(email)){
            $('.error-messages').append('<li><p class="error">Email is not valid</p></li>')
            errors += 1;
        }

        if(message === ''){
            $('.error-messages').append('<li><p class="error">Message is required</p></li>')
            errors += 1;
        }

        if(!errors) {
            $('#btn-submit').hide();
            $.post("sendmessage.php",
                {name: name, phone : phone, email: email, message: message},
                function (data) {

                    if (data == 'OK') {
                        $('.error-messages').append('<li><p class="success">Your message has been successfully sent!</p></li>')
                        setTimeout(function(){
                            $('.error-messages').empty();
                        },3000);
                    }

                    $('#btn-submit').show();

                });
        }
    });

    var validateEmail = function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

});