import React from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import csLogo from '../CS LOGO.jpeg';

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={csLogo} alt="CS Logo" style={{ width: '65px', height: 'auto' }} />
        </Link>
        <div>
          <ul id="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/grade-report">GradeReport</Link></li>
            <li><Link to="/missing-grade">MissingGradeReport</Link></li>
            <li><Link to="/instructor-contact">InstructorContact</Link></li>
            <li><Link to="/help">HelpandSupport</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;