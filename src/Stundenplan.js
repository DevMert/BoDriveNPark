import React, {Component} from 'react';
import Timetable from 'react-timetable-events';
import upperCase from 'react-timetable-events';

export default class Stundenplan extends Component{
    constructor (props) {
        super(props)
        this.state = {
            events: {
              monday: [
                
              ],
              tuesday: [
               
              ],
              wednesday: [],
              thursday: [],
              friday: []
            }
          }
    }
    defaultProps = {
        hoursInterval: [ 7, 24 ],
        timeLabel: 'Time',
        renderHour(hour, defaultAttributes, styles) {
          return (
            <div {...defaultAttributes}
                 key={hour}>
              { hour }
            </div>
          )
        },
        renderEvent(event, defaultAttributes, styles) {
          return (
            <div {...defaultAttributes}
                 title={event.name}
                 key={event.id}>
              <span className={styles.event_info}>{ event.name }</span>
              <span className={styles.event_info}>
                { event.startTime.format('HH:mm') } - { event.endTime.format('HH:mm') }
              </span>
            </div>
          )
        },
        getDayLabel: (day) => upperCase(day)
      }
      

    render (){
        return(
            <Timetable events={this.state.events}/>
            
        );
    }
}