import './JobList.css'
import { Job } from '../Job/Job'
import { Link } from 'react-router-dom'


export const JobList = () => {


  return (
    <div className="jobList">
      <Link to='/jobDetail/1' style={{ textDecoration: 'none' }}>
        <Job />
      </Link>
      <Link to='/jobDetail/2' style={{ textDecoration: 'none' }}>
        <Job />
      </Link>
      <Link to='/jobDetail/3' style={{ textDecoration: 'none' }}>
        <Job />
      </Link>
    </div>
  )
}
