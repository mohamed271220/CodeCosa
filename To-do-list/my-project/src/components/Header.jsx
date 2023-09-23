import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewTasks from "./NewTasks";



const Header = () => {


    const [addingNewTask, setAddingNewTask] = useState(false)


    function handleAddNewTask() {
        setAddingNewTask(true)


    }
    function handleDone() {
        setAddingNewTask(false)
    }

    return (
        <>
            <AnimatePresence>
                {addingNewTask && <NewTasks onDone={handleDone} />}
            </AnimatePresence>

            <header
                className="flex justify-between items-center w-[80%]   mx-auto my-auto text-[#0f61ef]"
            >
                <h1 className="text-[2rem] font-bold">To Do List</h1>
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#0f61ef" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500 }}

                    onClick={handleAddNewTask}
                    className="pointer px-[0.4rem] py-[1rem] rounded-[4px] bg-[#0f61ef] text-white border-none shadow-md shadow-black
          hover:bg-[#0f61ef] 
          "
                >
                    Add Tasks
                </motion.button>
            </header>
        </>
    )
}

export default Header