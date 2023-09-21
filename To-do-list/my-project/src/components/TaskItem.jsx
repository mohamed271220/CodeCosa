import { useContext } from "react";
import { TasksContext } from "../store/tasks-context";

import { AnimatePresence, motion } from "framer-motion";

export default function TasksItem({
    task,
    onViewDetails,
    isExpanded,
}) {
    const { updateTaskStatus } = useContext(TasksContext);

    const formattedDate = new Date(task.deadline).toLocaleDateString(
        "en-US",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }
    );

    function handleCancel() {
        updateTaskStatus(task.id, "failed");
    }

    function handleComplete() {
        updateTaskStatus(task.id, "completed");
    }

    return (
        <motion.li layout exit={{ y: -30, opacity: 0 }}>
            <article className="w-full">
                <header className=" flex gap-[1rem] flex-start">

                    <div className="w-full">
                        <h2 className="m-0 font-[1.25rem] text-[#b1c1d9]">{task.title}</h2>
                        <p className="mt-0 font-[0.7rem]">Complete until {formattedDate}</p>
                        <p className="flex justify-end gap-[1rem]">
                            <button onClick={handleCancel} className="text-[#ff7b7b] hover:text-[#ff7b7b]">
                                Mark as failed
                            </button>
                            <button onClick={handleComplete}>Mark as completed</button>
                        </p>
                    </div>
                </header>
                <div className={`task-item-details `}>
                    <p>
                        <button onClick={onViewDetails} className="
            pointer bg-transparent border-none text-[#7aaafc] p-0">
                            View Details{" "}
                            <motion.span
                                animate={{
                                    rotate: isExpanded ? 180 : 0,
                                }}
                                className=" inline-block font-[0.85rem] ml-[0.25rem] transform-[rotate(180deg)]"
                            >
                                &#9650;
                            </motion.span>
                        </button>
                    </p>

                    <AnimatePresence>

                        {isExpanded && (
                            <motion.div
                                initial={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                }}
                            >
                                <p className="m-0">
                                    {task.description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </article>
        </motion.li>
    );
}
