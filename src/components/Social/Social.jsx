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
            const style = {
              background: `url('${config.pathPrefix}/${social.img}')`,
              "background-size": "cover"
            };
            const linkStyle = {
              color: `#${social.color}`
            };
            return (
              <a
                href={social.url}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
                style={style}>
                <li>
                  <i
                    className={`icon-${social.label.toLowerCase()}`}
                    style={linkStyle}
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
