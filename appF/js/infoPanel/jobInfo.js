'use strict'

import React from 'react'
import JobInfoTable from './jobInfoTable'

import './less/jobInfo.less'

export default class JobInfo extends React.Component {

    render() {
        return (
            <div id='jobInfoPanel' className='container'>
                <button className="btn btn-primary btn-sm navbar-right" data-toggle='modal' data-target='#login-modal'>Create new job</button>
                <h1 className='page-header'>
                    Job list
                </h1>
                <JobInfoTable />


            </div>
        )
    }
}