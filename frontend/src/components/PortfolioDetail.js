import React from 'react'
import styled from 'styled-components'

const PortfolioDetail = () =>{
    return(
        <Detail>
            <Stats>
                <div>
                    <div>Title</div>
                    <p>Description</p>
                </div>
                <div>
                    <div>
                        Platforms/Technologies
                    </div>
                </div>
            </Stats>
            <Description>
                <p>Long Description</p>
            </Description>
            <div>
                Image
            </div>
        </Detail>
    )
}

const Detail = styled.div`
    width: 80%;
    min-height: 80vh;
    background: white;
    position: absolute;
    left: 10%;
    top: 15%;
    margin-bottom: 10%;
    z-index: 10;
`

const Stats =  styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
`

const Description = styled.div`
    padding: 2rem 5rem;
    p{
        color: black;
    }
`

export default PortfolioDetail