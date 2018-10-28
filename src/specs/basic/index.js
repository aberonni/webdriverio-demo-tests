const { assert } = require('chai');

const IndexPage = require('../../pageobjects/index.page');

describe('index page', function() {
    it('should have the correct page title', function() {
        IndexPage.open();
        const title = browser.getTitle();
        assert.equal(title, IndexPage.title, 'page title is correct');
    });

    it('should show the header logo when clicking on the arrow in the intro', function() {
        IndexPage.open();
        IndexPage.headerLogo.isVisible();
        IndexPage.introArrow.click();
        IndexPage.headerLogo.waitForVisible();
    });

    it('should have one featured article and six other regular articles', function() {
        IndexPage.open();
        IndexPage.featuredArticle.isVisible();
        assert.lengthOf(IndexPage.regularArticles, 6, 'has 6 regular articles');
    });
});
