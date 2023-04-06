export const headerImage = {
    initial: {
        y: 100,
        scale: 0.8,
        opacity: 0
    },
    animate: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            // ease: [ 0.6, 0.01, 0.05, 0.95 ],
            ease: "easeOut",
            duration: 1,
        }
    }
}

export const staggerChildren = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.08,
        }
    }
}

export const headerText = {
    initial: {
        opacity: 1,
    }, 
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            // ease: [ 0.6, 0.01, 0.05, 0.95 ],
            // duration: 1,
            ease: "easeOut",
            staggerChildren: 0.08
        }
    }
}

export const singleText = {
    initial: {
        opacity: 0,
        y: 50,
    }, 
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            // ease: [ 0.6, 0.01, 0.05, 0.95 ],
            ease: "easeOut",
            duration: 0.5,
        }
    }
}