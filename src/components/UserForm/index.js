import React, { Fragment } from 'react';
import UserPostTop from '../UserPostTop';
import './userForm.scss';

const UserForm = () => {
  console.log('a');
  return (
    <Fragment>
      <UserPostTop />
      <div className="users-wrapper">
        <div className="container">
          <div className="user-wrapper-main-content">
            <div className="user-wrapper-selector">
              {['dashboard', 'profile', 'my listing'].map(selector => (
                <div
                  key={selector}
                  value={selector}
                  className="user-wrapper-selector__content"
                >
                  <span className="user-wrapper-selector__content--icon">
                    f
                  </span>
                  <span className="user-wrapper-selector__content--text">
                    {selector}
                  </span>
                </div>
              ))}
            </div>
            <div className="user-wrapper-blocks">
              <div className="user-wrapper-blocks__big">
                <div className="user-wrapper-blocks__big--area">
                  <span className="user-wrapper-blocks__big--area__number">
                    30
                  </span>
                </div>
                <span className="user-wrapper-blocks__big--text">
                  all Listings
                </span>
              </div>
              <div className="user-wrapper-blocks__box">
                {['published', 'in review', 'unpaid', 'expired'].map(block => (
                  <div
                    key={block}
                    value={block}
                    className="user-wrapper-blocks__small"
                  >
                    <div className="user-wrapper-blocks__small--area">
                      <span className="user-wrapper-blocks__small--area__number">
                        10
                      </span>
                    </div>
                    <span className="user-wrapper-blocks__small--text">
                      {block}
                    </span>
                  </div>
                ))}
              </div>
              {[1, 2].map(block => (
                <div
                  key={block}
                  value={block}
                  className="user-wrapper-blocks__medium"
                >
                  <div className="user-wrapper-blocks__medium--area">
                    <span className="user-wrapper-blocks__medium--area__number">
                      320
                    </span>
                  </div>
                  <span className="user-wrapper-blocks__medium--text">
                    total views
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserForm;
