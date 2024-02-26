import React, { Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar'
// import DemoLink from '../../DemoLink.component'
// import events from '../events'
import * as dates from '../dates'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react'
import { useCallback } from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

const DragAndDropCalendar = withDragAndDrop(Calendar)


const mLocalizer = momentLocalizer(moment)
const events = [
    {
        id: 0,
        title: 'Test0',
        start: new Date(2024, 1, 26, 12, 0, 0),
        end: new Date(2024, 1, 26, 13, 0, 0),
        resourceId: 1,
    },
    {
      id: 1,
      title: 'Test1',
      start: new Date(2024, 1, 26, 12, 0, 0),
      end: new Date(2024, 1, 26, 13, 0, 0),
      resourceId: 2,
    },
    {
      id: 2,
      title: 'Test2',
      start: new Date(2024, 1, 26, 12, 0, 0),
      end: new Date(2024, 1, 26, 13, 0, 0),
      resourceId: 3,
    },
    {
        id: 3,
        title: 'Test3',
        start: new Date(2024, 1, 26, 12, 0, 0),
        end: new Date(2024, 1, 26, 13, 0, 0),
        resourceId: 4,
    },
    {
        id: 4,
        title: 'Test4',
        start: new Date(2024, 1, 26, 12, 0, 0),
        end: new Date(2024, 1, 26, 13, 0, 0),
        resourceId: 5,
    }
  ]

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
    //   backgroundColor: 'lightblue',
    },
  })


export default function DragNDrop({
  localizer = mLocalizer,
  showDemoLink = true,
  ...props
}) {
    const [myEvents, setMyEvents] = useState(events)

    const resourceMap = [
        { resourceId: 1, resourceTitle: 'Unassigned' },
        { resourceId: 2, resourceTitle: 'John' },
        { resourceId: 3, resourceTitle: 'Sam' },
        { resourceId: 4, resourceTitle: 'Sara' },
        { resourceId: 5, resourceTitle: 'Daniel' },
    ]

    const moveEvent = useCallback(
      ({ event, start, end, resourceId, isAllDay: droppedOnAllDaySlot = false }) => {
        const { allDay } = event
        if (!allDay && droppedOnAllDaySlot) {
          event.allDay = true
        }
  
        setMyEvents((prev) => {
          const existing = prev.find((ev) => ev.id === event.id) ?? {}
          console.log("existing :: ", existing);
          const filtered = prev.filter((ev) => ev.id !== event.id)
          console.log("filtered :: ", filtered);
          return [...filtered, { ...existing, start, end, resourceId, allDay }]
        })
      },
      [setMyEvents]
    )
  
    const resizeEvent = useCallback(
      ({ event, start, end }) => {
        setMyEvents((prev) => {
          const existing = prev.find((ev) => ev.id === event.id) ?? {}
          const filtered = prev.filter((ev) => ev.id !== event.id)
          return [...filtered, { ...existing, start, end }]
        })
      },
      [setMyEvents]
    )

  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(),
    //   max: dates.add(dates.endOf(new Date(2024, 2, 28), 'day'), -1, 'hours'),
      views: ['day'],
    }),
    []
  )

  return (
    <Fragment>
      {/* {showDemoLink ? <DemoLink fileName="basic" /> : null} */}
      <div className="height600" {...props}>
        <DragAndDropCalendar
          components={components}
          defaultDate={defaultDate}
          defaultView={Views.DAY}
          events={myEvents}
          localizer={localizer}
          showMultiDayTimes
          views={views}
          onEventDrop={moveEvent}
          onEventResize={resizeEvent}
          resourceIdAccessor="resourceId"
          resources={resourceMap}
          resourceTitleAccessor="resourceTitle"
        />
      </div>
    </Fragment>
  )
}
DragNDrop.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
  showDemoLink: PropTypes.bool,
}