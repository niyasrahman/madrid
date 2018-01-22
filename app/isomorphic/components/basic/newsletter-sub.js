import React from "react";
import assetify from '@quintype/framework/assetify';
import newsletterImage from '../../../assets/icons/newsletter.svg';
import { Button } from "./button.js";
import { DfpAd } from "../dfp-ads";

function NewsletterSub() {
  return <div className="two-col-one-ad__last">
      <div className="two-col-one-ad__last__first">
        <DfpAd adtype="Demo-Ad" />
      </div>
      <div className="two-col-one-ad__last__second">
        <img src={assetify(newsletterImage)} alt="Newsletter" />
        <h2>Subscribe to Newsletter</h2>
        <form className="two-col-one-ad__email">
          <input type="email" name="email" value="" placeholder="Your email" />
          <Button classNamesString="qt-button--secondary">Subscribe</Button>
        </form>
      </div>
    </div>
}

export { NewsletterSub };
