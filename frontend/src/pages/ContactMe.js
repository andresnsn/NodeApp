import React from 'react'
import styled from 'styled-components'
import { faGithubSquare, faLinkedin, faYoutubeSquare, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactMe = () => {
    return(
        <ContactStyled>
            <Title>
                <h2>Get in touch</h2>
            </Title>
            <Areas>
                <div id="form">
                    <form id="contact-form" method="post">
                        Name: <input type ="text"/>
                        Email: <input type="email"/>
                        Message: <textarea rows='5'/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <Network>
                    <Social href="https://github.com/andresnsn" target="_blank">
                        <FontAwesomeIcon icon={faGithubSquare} size='4x'/>
                        <h3>github.com/andresnsn</h3>
                    </Social>
                    <Social href="https://www.linkedin.com/in/andré-ribeiro-sn" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size='4x'/>
                        <h3>LinkedIn</h3>
                    </Social>
                    <Social href="https://www.youtube.com/channel/UCTmU6QLFjaBR7fSNpDQ2w5w" target="_blank">
                        <FontAwesomeIcon icon={faYoutubeSquare} size='4x'/>
                        <h3>Youtube</h3>
                    </Social>
                    <Social href="https://www.udemy.com" target="_blank">
                        <FontAwesomeIcon icon={faGraduationCap} size='4x'/>
                        <h3>Udemy</h3>
                    </Social>
                    <Social href="https://t.me/joinchat/UMMRfkRH8YxhOWMx" target="_blank">
                        <FontAwesomeIcon icon={faTelegramPlane} size='4x'/>
                        <h3>Telegram</h3>
                    </Social>
                </Network>
            </Areas>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;
`

const Title = styled.div`
    margin-bottom: 4rem;
    h2 {
        color: white;
    }
`

const Areas = styled.div`
    display: flex;
    align-items: center;
`

const Network = styled.div`
    padding: 1rem 5rem;
`

const Social = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 2rem;
    text-decoration: none;
    color: inherit;
    &:hover{
        background: yellow;
        cursor: pointer;
    }
    h3 {
        color: grey;
        margin: 2rem;
    }   
`
export default ContactMe