import { motion, Variants } from 'framer-motion'

const parentVariants: Variants = {
    hidden: {
        y: 0
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
}

const childrenVariants: Variants = {
    hidden: {
        y: 200
    },
    visible: {
        y: 0,
        transition: {
            ease: [0.32, 0.72, 0, 1],
            duration: 0.6
        }
    }
}

export default function NavBar() {
    return <section>
        <div className="md:mt-96">
        </div>
        <motion.div variants={parentVariants} initial="hidden" animate="visible" className="absolute text-xl md:text-5xl  font-bold top-[30vh] md:top-[40vh] w-full text-center flex flex-col">
            <div className='overflow-hidden md:pb-2 md:mb-2'>
                <motion.h1 variants={childrenVariants}>Designing experiences</motion.h1>
            </div>
            <div className='overflow-hidden md:pb-2 md:mb-2'>
                <motion.h1 variants={childrenVariants}>that connect users to the digital world</motion.h1>
            </div>
        </motion.div>
    </section>
}