import React, { Component } from "react";
import  { Link } from "gatsby";
import "./Header.css";


class Header extends Component {
    constructor(props) {
      super(props);
      this.menuToggle = this.menuToggle.bind(this);
      this.menuClose = this.menuClose.bind(this);
      this.state = {
        active: false,
      };
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.menuClose);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.menuClose);
    }

    menuToggle () {
      const currentState = this.state.active;
      this.setState({
        active: !currentState
      });
    }

    menuClose (e) {
      const {srcElement: {id}} = e;
      if (id === "menutoggle") return;
      this.setState({
        active: false
      });
    }

    render() {
        return (
          <header className="siteHeader">
            <div className="navigation-wrapper">
              <div className="top-navigation">
                <div className="site-name">
                  <Link to="/">East Meets Kitchen</Link>
                </div>
                <ul className="sideNav">
                  <li><Link to="/categories/recipes">Recipes</Link></li>
                  <li><Link to="/about">Contact</Link></li>
                  {/* <li><Link to="/search"><i className="icon-search" /></Link></li> */}
                </ul>
              </div>
            </div>
          </header>
        );
    }
}

export default Header;