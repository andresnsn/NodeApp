import React from 'react'
import styled from 'styled-components'

const Card = () => {
    return(
        <>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
        </>
        
    )
}

const StyledCard = styled.div`
    background-color: green;
    min-height: 30vh;
    border-color: #416CD5;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        padding-top: 2rem;

    }
`

export default Card