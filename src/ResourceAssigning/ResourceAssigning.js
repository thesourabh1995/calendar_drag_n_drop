import React, { Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, DateLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// import DemoLink from '../../DemoLink.component'
// import LinkTo from '@storybook/addon-links/react'
const mLocalizer = momentLocalizer(moment)

const events = [
  {
    id: 0,
    title: 'Test1',
    start: new Date(2024, 1, 26, 12, 0, 0),
    end: new Date(2024, 1, 26, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: 'Test2',
    start: new Date(2024, 1, 26, 12, 0, 0),
    end: new Date(2024, 1, 26, 13, 0, 0),
    resourceId: 2,
  }
]

const resourceMap = [
  { resourceId: 1, resourceTitle: 'John' },
  { resourceId: 2, resourceTitle: 'Sam' },
]

export default function Resource({ localizer=mLocalizer }) {
  const { defaultDate, views } = useMemo(
    () => ({
      defaultDate: new Date(2024, 1, 26),
      views: ['day'],
    }),
    []
  )

  return (
    <Fragment>

      <div className="height600">
        <Calendar
          defaultDate={defaultDate}
          defaultView={Views.DAY}
          events={events}
          localizer={localizer}
          resourceIdAccessor="resourceId"
          resources={resourceMap}
          resourceTitleAccessor="resourceTitle"
        //   step={60}
          views={views}
        />
      </div>
    </Fragment>
  )
}
Resource.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
}