import React from 'react';
import './userDashboard.scss';

const Dashboard = () => {
  console.log('dash');
  return (
    <div className="user-wrapper-dashboard">
      <div className="user-wrapper-dashboard__big">
        <div className="user-wrapper-dashboard__big--area">
          <span className="user-wrapper-dashboard__big--area__number">
            30
          </span>
        </div>
        <span className="user-wrapper-dashboard__big--text">
          all Listings
        </span>
      </div>
      <div className="user-wrapper-dashboard__box">
        {['published', 'in review', 'unpaid', 'expired'].map(block => (
          <div
            key={block}
            value={block}
            className="user-wrapper-dashboard__small"
          >
            <div className="user-wrapper-dashboard__small--area">
              <span className="user-wrapper-dashboard__small--area__number">
                10
              </span>
            </div>
            <span className="user-wrapper-dashboard__small--text">
              {block}
            </span>
          </div>
        ))}
      </div>
      {[1, 2].map(block => (
        <div
          key={block}
          value={block}
          className="user-wrapper-dashboard__medium"
        >
          <div className="user-wrapper-dashboard__medium--area">
            <span className="user-wrapper-dashboard__medium--area__number">
              320
            </span>
          </div>
          <span className="user-wrapper-dashboard__medium--text">
            total views
          </span>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
