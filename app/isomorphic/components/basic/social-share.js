import React from "react";

import fbIcon from '../../../assets/icons/social/fb-share.svg';
import twitterIcon from '../../../assets/icons/social/twitter-share.svg';
import linkedinIcon from '../../../assets/icons/social/linkedin-share.svg';
import gplusIcon from '../../../assets/icons/social/gplus-share.svg';

function SocialShare({url, title, hashtags, via}) {
  const fullUrl = url ? `${window.location.origin}/${url}` : `${window.location.href}`;
  const fbUrl = `https://www.facebook.com/sharer.php?u=${fullUrl}`;
  const slicedTitle = title.length > 60 ? title.substr(0, 57) + '...' : title;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${fullUrl}&text=${slicedTitle}&hashtags=${hashtags}`;
  const gplusUrl = `https://plus.google.com/share?url=${fullUrl}`
  const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${fullUrl}&title=${title}`
  return <ul className="social-share-icons">
      <li className="social-share-icon">
        <a href={fbUrl} target="_blank">
          <img src={fbIcon} alt="fbIcon"/>
        </a>
      </li>
      <li className="social-share-icon">
        <a href={twitterUrl} target="_blank">
          <img src={twitterIcon} alt="twitterIcon"/>
        </a>
      </li>
      <li className="social-share-icon">
        <a href={gplusUrl} target="_blank">
          <img src={gplusIcon} alt="gplusIcon"/>
        </a>
      </li>
      <li className="social-share-icon">
        <a href={linkedinUrl} target="_blank">
          <img src={linkedinIcon} alt="linkedinIcon"/>
        </a>
      </li>
    </ul>
}

export { SocialShare };
