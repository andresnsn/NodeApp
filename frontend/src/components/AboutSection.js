import React from 'react'

import { About, Description, Image} from '../styles'

const AboutSection = () => {
    return(
        <About>
            <Description>
                <h2>André Ribeiro</h2>
                <h2>Analista de sistemas</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.</p>
                    <button>Contact me</button>
            </Description>
            <Image>
                <img src="https://lh3.googleusercontent.com/a-/AOh14Giz7Lyy-cbzeppDx2SqVvHCpV6tSq5TSusWgn8e3w=s288-p-no"></img>
            </Image>
        </About>
    )
}

export default AboutSection