import {motion} from "framer-motion";

const animations = {
   in:{ opacity:1, y:0},
   out:{
    opacity:0, y:"-100%"
   }

}

const transition = {
    duration: .3
}

const Animate = ({children}) =>{
    return(
        <motion.div variants={animations} initial="out" animate="in" exit="out" transition={transition}>
            
`{children}`

        </motion.div>

    )
}

export default Animate;