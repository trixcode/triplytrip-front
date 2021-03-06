import React from 'react';
import { connect } from 'react-redux';

import UpcommingEvents from '../../components/UpcommingEvents';
import { getEventsStart } from '../../store/actions';

const UpcommingEventsContainer = props => <UpcommingEvents {...props} />;

const mapStateToProps = store => ({
  currentEvents: store.events.currentEvents,
});
const mapDispatchToProps = dispatch => ({
  getEventsStart: (requestParams = '') => dispatch(getEventsStart(requestParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcommingEventsContainer);
