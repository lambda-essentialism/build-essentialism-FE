import React, { Component } from 'react'
import {Route,withRouter,Link} from 'react-router-dom'
import '../App.css'
import DashIcon from './dashboard.svg'
import ProjectsIcon from './projects.svg'
import ValuesIcon from './values.svg'

class Dashboard extends Component {
    render() {
        return (

           <Route><div className='dashboard'>

                 <h1 className='dashboardheader'>Dashboard</h1>

                 <div className='dashmenu'>

                     <Link className='dash-link' to='/dashboard'><img alt='dash' src={DashIcon} className='dash-icon' id='dashicon'></img> ESSE Dashboard</Link>
                     <Link className='dash-link' to='/currentprojects'><img alt='projects' src={ProjectsIcon} className='dash-icon'></img>  Current Projects</Link>
                     <Link className='dash-link' to='/values'><img alt='values' src={ValuesIcon} className='dash-icon'></img>  Essential Values</Link>


                 </div>

            </div></Route>
        )
    }
}


export default withRouter(Dashboard);
