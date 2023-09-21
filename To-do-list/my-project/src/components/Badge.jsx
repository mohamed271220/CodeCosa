import { motion } from "framer-motion";
export default function Badge({ caption }) {
    return (
        <motion.span
            animate={{
                scale: [1, 1.2, 1],
            }}
            transition={{ duration: 0.3 }}
            className="ml-[0.5rem] px-[0.25rem] py-[0.5rem] rounded-[4px] bg-[#0f61ef] text-white
      font-[0.5rem]
      "
        >
            {caption}
        </motion.span>
    );
}
