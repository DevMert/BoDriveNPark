import React from 'react';

import moment from 'moment';

export default class CurrentWeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
        .locale('de')
        .startOf('isoweek')
        .format('LL'),

      end: moment()
        .locale('de')
        .endOf('isoweek')
        .format('LL'),
    };
  }

  render() {
    return (
      <div className='Test '>
        {this.state.date.toString()} - {this.state.end.toString()}
      </div>
    );
  }
}
