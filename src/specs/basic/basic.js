const { assert } = require('chai');

const IndexPage = require('../../pageobjects/index.page');

describe('Basic example on static website', function() {
    it('should have "Massively by HTML5 UP" as page title', function() {
        IndexPage.open();
        const title = browser.getTitle();
        assert.equal(title, 'Massively by HTML5 UP');
    });

    it('should test form output', function() {
        const name = 'foo';
        const email = 'foo@bar.com';
        const message = 'Hello!';

        IndexPage.open();
        IndexPage.contactName.setValue(name);
        IndexPage.contactEmail.setValue(email);
        IndexPage.contactMessage.setValue(message);
        IndexPage.contactSubmit.click();

        const output = IndexPage.contactOutput;
        assert.equal(output, `${name} ${email} ${message}`);
    });
});
