import React, { Component } from "react";
import "./HomeTiles.css"


class HomeTiles extends Component {
  getTiles () {
    const { config: {displayCategories}} = this.props;
    return displayCategories.map(link => (
      <a className="tile" key={link.name} href={link.url}>
        <div className="tileImage">
          <div className="tileWrap">
            <img src={link.img} alt={link.name} />
          </div>
        </div>
        <div className="tileOverlay" />
        <div className="tileText">
          <div className="tileTitle">{link.name}</div>
        </div>
      </a>
    ));
  }

  render() {
    return (
      <div className="homeTiles">
        {this.getTiles()}
      </div>
    );
  }

}

export default HomeTiles;