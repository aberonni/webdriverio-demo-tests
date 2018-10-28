const { assert } = require('chai');

const IndexPage = require('../../pageobjects/index.page');

describe('contact form', function() {
    it('when submitted with valid data should open alert with form data', function() {
        const name = 'foo';
        const email = 'foo@bar.com';
        const message = 'Hello!';

        IndexPage.open();
        IndexPage.submitContactForm(name, email, message);

        const output = browser.alertText();
        assert.equal(
            output,
            `Form data: "${name}" "${email}" "${message}"`,
            'alert contains the correct content'
        );
        browser.alertAccept();
    });

    it('when submitted with invalid data should open alert with error', function() {
        const name = '';
        const email = '';
        const message = '';

        IndexPage.open();
        IndexPage.submitContactForm(name, email, message);

        const output = browser.alertText();
        assert.equal(
            output,
            'Missing field',
            'alert contains the correct content'
        );
        browser.alertAccept();
    });
});
