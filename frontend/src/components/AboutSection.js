import React from 'react'

import { useHistory } from 'react-router-dom'

import { About, Description, Image} from '../styles'
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation, scrollReveal } from '../animation'
import { useScroll } from '../hooks/useScroll'

const AboutSection = () => {
    const[element, controls] = useScroll()
    const history = useHistory()

    const redirectHandler = () => {
        history.push('/contact')
    }

    return(
        <About
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <Description>
                <motion.h2 variants={titleAnimation}>André Ribeiro</motion.h2>
                <motion.h2 variants={titleAnimation}>Analista de sistemas</motion.h2>
                <motion.p variants={fade}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.</motion.p>
                    <button onClick={redirectHandler}>Contact me</button>
            </Description>
            <Image>
                <motion.div variants={photoAnimation}>
                    <img src="https://lh3.googleusercontent.com/a-/AOh14Giz7Lyy-cbzeppDx2SqVvHCpV6tSq5TSusWgn8e3w=s288-p-no"></img>
                </motion.div>
            </Image>
        </About>
    )
}

export default AboutSection