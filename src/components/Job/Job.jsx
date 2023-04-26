import { useState } from 'react'
import './Job.css'

export const Job = (props) => {
  const [job, setjob] = useState(props.job)
  console.log(job)
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
        <div className="time">Full time</div>
      </div>

      <div className="job_status">
        <div className="city">
          <i className="fa-solid fa-earth-americas"></i>
          {job.city}
        </div>
        <div className="ago">
          <i className="fa-regular fa-clock"></i>
          5 days ago
        </div>
      </div>
    </div>
  )
}
