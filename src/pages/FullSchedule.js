import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCalendar } from 'redux/reducers/calendar';

const FullSchedule = () => {
  const dispatch = useDispatch()

  const calendar = useSelector((state) => state.calendar.calendar)
  console.log(calendar)

  useEffect(() => {
    dispatch(getCalendar())
  }, [dispatch])

  return (
    <div>
      {calendar?.map((item) => (
        <div key={item.weekday}>
          <h1>{item.weekday}</h1>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          {item.schedule.map((time) => (
            <div key={time.title}>
              <h2>{time.title}</h2>
              <p>{time.description}</p>
              <p>{time.time}</p>
              <p>{time.artist}</p>
            </div>
          ))}
        </div>
      ))}

    </div>
  )
}

export default FullSchedule