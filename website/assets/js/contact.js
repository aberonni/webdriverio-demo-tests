(function($) {
    const $name = $('#name');
    const $email = $('#email');
    const $message = $('#message');
    const $submit = $('input[type="submit"]');
    const $output = $('#contact-output');

    function getOutput() {
        return `${$name.val()} ${$email.val()} ${$message.val()}`;
    }

    $submit.on('click', (e) => {
        e.preventDefault();
        $output.text(getOutput());
    });
})(jQuery);
