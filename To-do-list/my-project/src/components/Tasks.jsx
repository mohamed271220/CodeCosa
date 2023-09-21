import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TasksContext } from "../store/tasks-context";
import { motion } from "framer-motion";


import TaskItem from "./TaskItem.jsx";
import TaskTabs from "./TaskTabs.jsx";


export default function Tasks() {
    const { tasks } = useContext(TasksContext);
    const [selectedType, setSelectedType] = useState("active");
    const [expanded, setExpanded] = useState(null);

    function handleSelectType(newType) {
        setSelectedType(newType);
    }

    function handleViewDetails(id) {
        setExpanded((prevId) => {
            if (prevId === id) {
                return null;
            }

            return id;
        });
    }

    const filteredTasks = {
        active: tasks.filter((task) => task.status === "active"),
        completed: tasks.filter(
            (task) => task.status === "completed"
        ),
        failed: tasks.filter((task) => task.status === "failed"),
    };

    const displayedTasks = filteredTasks[selectedType];

    return (
        <div className="bg-[#22323a] p-[1rem] rounded-[6px]">
            <TaskTabs
                tasks={filteredTasks}
                onSelectType={handleSelectType}
                selectedType={selectedType}
            >
                <AnimatePresence mode="wait">
                    {displayedTasks.length > 0 && (
                        <motion.ol className="
            w-full max-w-[90%] flex gap-[1rem] flex-col list-none m-0 mt-[2rem] p-0 
            " key="3b"
                            initial={{
                                opacity: 0,
                                y: -20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                        >
                            {displayedTasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    onViewDetails={() => handleViewDetails(task.id)}
                                    isExpanded={expanded === task.id}
                                />
                            ))}
                        </motion.ol>
                    )}
                    {displayedTasks.length === 0 && (
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: -20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: 20,
                            }}
                            key="23gyhu"
                        >
                            No tasks found.
                        </motion.p>
                    )}
                </AnimatePresence>
            </TaskTabs>
        </div>
    );
}
