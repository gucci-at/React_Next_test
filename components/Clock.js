import React from 'react'
import { connect } from 'react-redux'
//import { style, merge } from 'next/css'

export default connect(state => state)(({ lastUpdate, light }) => {
   return (
    <div>
      {format(new Date(lastUpdate))}
    </div>
  )
})

const format = t => `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`

const pad = n => n < 10 ? `0${n}` : n

export const startClock = () => dispatch => {
    setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
  }
