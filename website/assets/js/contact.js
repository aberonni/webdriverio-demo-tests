(function($) {
    const $name = $('#name');
    const $email = $('#email');
    const $message = $('#message');
    const $submit = $('input[type="submit"]');

    function getOutput() {
        const name = $name.val();
        const email = $email.val();
        const message = $message.val();
        if (!name || !email || !message) {
            return 'Missing field';
        }
        return `Form data: "${name}" "${email}" "${message}"`;
    }

    $submit.on('click', e => {
        e.preventDefault();
        window.alert(getOutput());
    });
})(jQuery);
