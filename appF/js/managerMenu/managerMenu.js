'use strict'

import React from 'react'

import ClusterButton from './clusterButton'
import JobButton from './jobButton'

//import './less/managerMenu.less'

export default class ManagerMenu extends React.Component {

// <li className="active"><a href="#">Cluster Manager</a></li>
//                     <li><a href="#">Job Manager</a></li>
    render() {
        return (

            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <ClusterButton />
                    <JobButton />
                </ul>
            </div>

        )
    }
}