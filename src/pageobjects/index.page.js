const Page = require('./page');

class IndexPage extends Page {
    get introArrow() {
        return $('#intro .scrolly');
    }

    get headerLogo() {
        return $('#header .logo');
    }

    get featuredArticle() {
        return $('.posts article');
    }

    get regularArticles() {
        return $$('.posts article');
    }

    get contactName() {
        return $('input#name');
    }

    get contactEmail() {
        return $('input#email');
    }

    get contactMessage() {
        return $('textarea#message');
    }

    get contactSubmit() {
        return $('input[type="submit"]');
    }

    open() {
        super.open('/');
    }

    submitContactForm(name, email, message) {
        this.contactName.setValue(name);
        this.contactEmail.setValue(email);
        this.contactMessage.setValue(message);
        this.contactSubmit.click();
    }
}

module.exports = new IndexPage();
