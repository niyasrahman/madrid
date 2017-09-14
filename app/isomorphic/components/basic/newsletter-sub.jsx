const React = require("react");
const adImage = require('../../../assets/images/qt-ad.png');
const newsletterImage = require('../../../assets/icons/newsletter.svg');

function NewsletterSub() {
  return <div className="two-col-one-ad__last">
      <div className="two-col-one-ad__last__first">
        <img src={adImage} alt="Ad"/>
      </div>
      <div className="two-col-one-ad__last__second">
        <img src={newsletterImage} alt="Newsletter" />
        <h2>Subscribe to Newsletter</h2>
        <form className="two-col-one-ad__email">
          <input type="email" name="email" value="" placeholder="Your email" />
          <button type="submit" className="button button--secondary" name="button">Subscribe</button>
        </form>
      </div>
    </div>
}

exports.NewsletterSub = NewsletterSub;
