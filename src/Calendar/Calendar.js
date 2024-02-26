import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)

function CalendarComponent() {

  const timeData = [{
    time:"9:00 AM",
    
  }]  
  return (
            <div className="calendar-container">
                <Calendar
                  localizer={localizer}
                  // events={myEventsList}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                />
            </div>
  );
}

export default CalendarComponent;
