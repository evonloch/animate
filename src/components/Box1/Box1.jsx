import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Box1() {
    const [isAnimating, setIsAnimating] = useState(false)
    return (
        <div className="box-container">
             <motion.div 
                className="box"
                style={{
                    opacity: 0.2
                }}
                drag
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                animate={{
                    y: isAnimating? 300: 0,
                    opacity: isAnimating? 1 : .5,
                    rotate: isAnimating? 360 : 0  
                    
                }}
                initial={{
                    opacity: 0.1
                }}
                transition ={{
                    type: "spring",
                    stiffness: 200,
                    damping: 75
                }}

                onClick={() => setIsAnimating(!isAnimating)}
             >

             </motion.div>
        </div>
    )
}