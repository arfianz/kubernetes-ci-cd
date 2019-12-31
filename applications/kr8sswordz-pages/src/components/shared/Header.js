import React from 'react';
import {IndexLink, Link} from 'react-router';

const Header = () => {
  return (
    <header className="primary-header">
      <a href="http://www.kenzan.com" target="_new"><img className="logo" src={`../../assets/logo-reg-2x.png`} /></a>
      <h1 className="title"><span className="k8color">K</span>r<span className="k8color">8</span>s<span className="k8color">s</span>wordz</h1>
    </header>
  );
};

export default Header;
