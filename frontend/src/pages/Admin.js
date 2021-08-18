import React from 'react'
import {Jumbotron, Tab, Tabs, Container} from 'react-bootstrap'
import PortfolioList from '../components/admin/PortfolioList'
import WelcomeTab from '../components/admin/WelcomeTab'
import { Redirect } from 'react-router-dom'
import Userfront from '@userfront/react'
import jwt_decode from 'jwt-decode'

Userfront.init("jb7dwvn6")



const Admin = ({location}) => {
    if(!Userfront.accessToken()) {
        return(
            <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }} />
        )
    }

    const userData = jwt_decode(Userfront.accessToken())
    console.log("user: ", userData)
    const user = JSON.stringify(userData)
    

    return(
    <Container fluid>
        <Jumbotron>
            <h1>Admin Panel</h1>
        </Jumbotron>
        <Tabs transition={false} defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
                <WelcomeTab/>
            </Tab>
            <Tab eventKey="portfolio" title="Portfolio">
                <PortfolioList/>
            </Tab>
            <Tab eventKey="user" title="User">
                <p>Olá</p>
            </Tab>
        </Tabs>
    </Container>
    )
}

export default Admin