import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../_assets/clean.png';

export const Footer = () => (
  <div className="footer container-xl width-full p-responsive" role="contentinfo">
    <div
      className="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
      <ul className="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li className="mr-3 mr-lg-0">© 2020 FSky, Inc.</li>
        <li className="mr-3 mr-lg-0">
          <a data-ga-click="Footer, go to terms, text:terms" href="/terms">Terms</a>
        </li>
        <li className="mr-3 mr-lg-0">
          <a data-ga-click="Footer, go to privacy, text:privacy" href="/privacy">Privacy</a>
        </li>
        <li className="mr-3 mr-lg-0">
          <a href="/" data-ga-click="Footer, go to status, text:status">Status</a>
        </li>
        <li>
          <a data-ga-click="Footer, go to help, text:help" href="https://help.fsky.top">Help</a>
        </li>
      </ul>

      <a aria-label="Homepage" title="fsky.top" className="footer-octicon d-none d-lg-block mx-lg-4"
         href="/">
        <img className="avatar" height="24" width="24" alt="icon" src={logo} />
      </a>
      <ul className="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li className="mr-3 mr-lg-0">
          <a data-ga-click="Footer, go to contact, text:contact" href="/contact">Contact FSky</a>
        </li>
        <li className="mr-3 mr-lg-0">
          <a data-ga-click="Footer, go to contact, text:contact" href="/contact">Api</a>
        </li>
        <li className="mr-3 mr-lg-0">
          <a data-ga-click="Footer, go to contact, text:contact" href="/contact">Blog</a>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
    <div className="d-flex flex-justify-center pb-6">
      <span className="f6 text-gray-light"></span>
    </div>
  </div>
);
