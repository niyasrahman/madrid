const React = require("react");

function TwoColOneAd(props) {
  return (
    <div className="rango">
      <div className="rango__first bg--shadow bg--white">
        <div className="rango__first__img">
          <img src="{{assetPath('rango-hero.png')}}" alt="" />
        </div>
        <div className="section--card--1">
          <div className="section--title--small section--business">Business</div>
          <h2>Jenny Lawson Is Publishing a New Book and It’s Sort of a Coloring Book</h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          <div className="author--title">
            Jonnathan Doe
          </div>
        </div>
      </div>

      <div className="rango__middle no--bg">
        <div className="section-card--2">
          <div className="section--title--small section--travel">
            Travel
          </div>
          <h2>Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service</h2>
          <div className="author--title author--small">
            Alex Parkinson
          </div>
        </div>

        <div className="section-card--2">
          <div className="section--title--small section--health-fit">
            HEALTH & FITNESS
          </div>
          <h2>Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-Year Low</h2>
          <div className="author--title author--small">
            Alice Doe
          </div>
        </div>

        <div className="section-card--2">
          <div className="section--title--small section--science">
            Science
          </div>
          <h2>Sundar Pichai Launches ‘Digital Unlocked’ Programme </h2>
          <div className="author--title author--small">
            Alex Parkinson
          </div>
        </div>
      </div>

      <div className="rango__last">
        <div className="rango__last__first">
          <img src="{{assetPath('qt-ad.png')}}" alt="" />
        </div>
        <div className="rango__last__second">
          <img src="{{assetPath('newsletter.svg')}}" alt="" />
          <h2>Subscribe to Newsletter</h2>
          <form className="rango__email" action="" method="post">
            <input type="email" name="email" value="" placeholder="Your email" />
            <button type="submit" className="button button--secondary" name="button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )

}

exports.TwoColOneAd = TwoColOneAd;
