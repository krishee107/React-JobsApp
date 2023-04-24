import './Job.css'

export const Job = () => {
  return (
    <div className="job">
      <div className="job_img">
        <img src="https://kasisto.com/wp-content/themes/kasisto/img/client-logo.png" alt="Job logo" />
      </div>

      <div className="job_info">
        <div className="job_enterprise">Kasisto</div>
        <div className="job_title">Front-end Software Engineer</div>
        <div className="time">Full time</div>
      </div>

      <div className="job_status">
        <div className="city">
          <i class="fa-solid fa-earth-americas"></i>
          New york
        </div>
        <div className="ago">
          <i class="fa-regular fa-clock"></i>
          5 days ago
        </div>
      </div>
    </div>
  )
}
