import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = () => {
    const menuOptions = {
        about: '<About me/ >',
        portfolio: '<Portfolio />',
        contact: '<Contact me/ >'
    }
    return(
        <StyledNav>
            <h1><Link to = '/'>André Ribeiro</Link></h1>
            <ul>
                <li><Link to='/'>{menuOptions.about}</Link></li>
                <li><Link to = '/portfolio'>{menuOptions.portfolio}</Link></li>
                <li><Link to = '/contact'>{menuOptions.contact}</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
`


export default Nav