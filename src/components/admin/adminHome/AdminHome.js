import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AdminHome extends Component {
    render() {
        return (
            <div style={{ paddingTop: '60px', maxWidth: 960, marginLeft: 'auto', marginRight: 'auto' }}>
                <h1>Fixter admin:</h1>
                <div>
                    <Link to="/admin/addCourse"><button>Agregar curso</button></Link>
                </div>
            </div>
        )
    }
}
