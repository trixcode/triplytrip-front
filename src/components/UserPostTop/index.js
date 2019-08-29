import React from 'react';
import './userPostTop.scss';

const UserPostTop = () => {
  console.log('a');
  return (
    <div className="postTop-wrapper">
      <div className="container">
        <div className="postTop-wrapper-main-content">
          <div className="postTop-wrapper-user">
            <div className="postTop-wrapper-user__image">
              img
            </div>
            <div className="postTop-wrapper-user__info">
              <div className="postTop-wrapper-user__info--name">
                jon jones
              </div>
              <div className="postTop-wrapper-user__info--status">
                admin
              </div>
            </div>
          </div>
          <div className="postTop-wrapper-profile">
            <div className="postTop-wrapper-profile__status">
              <div className="postTop-wrapper-profile__status--follow">
                <span className="postTop-wrapper-profile__status--follow-number">232</span>
                <span className="postTop-wrapper-profile__status--follow-text">followers</span>
              </div>
              <div className="postTop-wrapper-profile__status--follow">
                <span className="postTop-wrapper-profile__status--follow-number">123</span>
                <span className="postTop-wrapper-profile__status--follow-text">following</span>
              </div>
            </div>
            <button type="button" className="postTop-wrapper-profile__btn">
              edit profile
            </button>
            <span className="postTop-wrapper-profile__icon">f</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostTop;
