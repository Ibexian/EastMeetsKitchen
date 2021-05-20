import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./Social.css";
import "../Book/Book.css";

class SocialLinks extends Component {
  render() {
    const { userLinks } = config;

    return (
      <div className="socials">
        {userLinks &&
          userLinks.map(social => {
            return (
              <a
                href={social.url}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i
                    className={`icon-${social.label.toLowerCase()}`}
                  />
                </li>
              </a>
            );
          })}
      </div>
    );
  }
}

export default SocialLinks;
