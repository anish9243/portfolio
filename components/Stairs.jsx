// components/Stairs.js
import { motion } from "framer-motion";

//variants
const stairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairsAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-white relative pointer-events-none"
                        // style={{ pointerEvents: 'none' }} // Disable pointer events on Stairs
                    />
                );
            })}
        </>
    );
};

export default Stairs;
