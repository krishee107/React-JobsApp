import { useState } from 'react'
import './Job.css'
import moment from 'moment'

export const Job = (props) => {
  const [job, setjob] = useState(props.job)

  const timeAgo = (date) => {
    return moment(date).fromNow(); // calcula la diferencia de tiempo
  }

  return (
    <div className="job">
      <div className="job_img">
        {job.urlLogo != '' ?
          <img src={job.urlLogo} />
          :
          <img src="https://gigr.com/images/png/default_logo.png" alt="Job logo" />
        }

      </div>

      <div className="job_info">
        <div className="job_enterprise">{job.nombre}</div>
        <div className="job_title">{job.titulo}</div>
        {
          job.time == 'fullTime' ?
            <div className="time">Full time</div>
            :
            <div className="time">Part time</div>
        }
      </div>

      <div className="job_status">
        <div className="city">
          <i className="fa-solid fa-earth-americas"></i>
          {job.city}
        </div>
        <div className="ago">
          <i className="fa-regular fa-clock"></i>
          {timeAgo(job.creacion.toDate().toString())}
        </div>
      </div>
    </div>
  )
}
