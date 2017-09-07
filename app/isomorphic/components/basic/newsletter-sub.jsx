const React = require("react");

function NewsletterSub() {
  return <div className="rango__last">
      <div className="rango__last__first">
        <img src="{{assetPath('qt-ad.png')}}" alt="" />
      </div>
      <div className="rango__last__second">
        <img src="{{assetPath('newsletter.svg')}}" alt="" />
        <h2>Subscribe to Newsletter</h2>
        <form className="rango__email">
          <input type="email" name="email" value="" placeholder="Your email" />
          <button type="submit" className="button button--secondary" name="button">Subscribe</button>
        </form>
      </div>
    </div>
}

exports.NewsletterSub = NewsletterSub;
