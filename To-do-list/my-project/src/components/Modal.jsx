import { createPortal } from "react-dom";

import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
    return createPortal(
        <>
            <div className="
      fixed 
      top-0
      left-0
      w-full
      h-[100vh]
      bg-black
       z-10
      " onClick={onClose} />
            <motion.dialog
                open
                className="
        top-[10%]
        rounded-[6px]
        p-[1.5rem]
        w-[30rem]
        max-w-[90%]
        z-20
        "
                //To reuse states
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 30 },
                }}
                //from these
                initial="hidden"
                //to these
                animate="visible"
                //ends with this
                exit="hidden"

            >
                <h2 className="mt-0">{title}</h2>
                {children}
            </motion.dialog>
        </>,
        document.getElementById("modal")
    );
}
