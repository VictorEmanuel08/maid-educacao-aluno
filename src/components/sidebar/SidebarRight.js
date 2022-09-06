import './SidebarRight.scss'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

export default function SidebarRight() {
  const [value, onChange] = useState(new Date())
  return (
    <div className="sidebarRight">
      <div className="calendario">
        <div>
          <Calendar locale={'pt'} onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  )
}
