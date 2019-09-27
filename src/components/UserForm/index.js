import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faHome, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserPostTop from '../UserPostTop';
import Dashboard from '../UserDashboard';
import Listing from '../UserListing';
import Profile from '../UserProfile';
import './userForm.scss';

const UserForm = (props) => {
  const {
    getUserListingStart, deleteUserListingStart, myListing, user,
  } = props;

  useEffect(() => {
    getUserListingStart();
  }, []);

  const [isDashboardClicked, setDashboard] = useState(true);
  const [isProfileClicked, setProfile] = useState(false);
  const [isListingClicked, setListing] = useState(false);

  const switchTabs = (a, b, c) => {
    a(true);
    b(false);
    c(false);
    window.scrollTo(150, 150);
  };

  return (
    <Fragment>
      <UserPostTop user={user} />
      <div className="users-wrapper">
        <div className="container">
          <div className="user-wrapper-main-content">
            <div className="user-wrapper-tabs">
              <button
                type="button"
                id="Dashboard"
                onClick={() => switchTabs(setDashboard, setProfile, setListing)}
                className={isDashboardClicked ? 'selected' : 'user-wrapper-tabs__content'}
              >
                <span className="user-wrapper-tabs__content--icon">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span className="user-wrapper-tabs__content--text">
                  dashboard
                </span>
              </button>
              <button
                type="button"
                id="Profile"
                onClick={() => switchTabs(setProfile, setDashboard, setListing)}
                className={isProfileClicked ? 'selected' : 'user-wrapper-tabs__content'}
              >
                <span className="user-wrapper-tabs__content--icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="user-wrapper-tabs__content--text">
                  profile
                </span>
              </button>
              <button
                type="button"
                id="Listing"
                onClick={() => switchTabs(setListing, setDashboard, setProfile)}
                className={isListingClicked ? 'selected' : 'user-wrapper-tabs__content'}
              >
                <span className="user-wrapper-tabs__content--icon">
                  <FontAwesomeIcon icon={faFileAlt} />
                </span>
                <span className="user-wrapper-tabs__content--text">
                  my listing
                </span>
              </button>
            </div>
            {isDashboardClicked ? <Dashboard myListing={myListing} /> : ''}
            {isProfileClicked ? <Profile /> : ''}
            {isListingClicked ? <Listing myListing={myListing} deleteUserListingStart={deleteUserListingStart} /> : ''}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

UserForm.propTypes = {
  myListing: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteUserListingStart: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  getUserListingStart: PropTypes.func.isRequired,
};


export default UserForm;
