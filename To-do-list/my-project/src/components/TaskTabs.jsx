import Badge from "./Badge.jsx";
import { motion } from "framer-motion";
function Tab({ isSelected, onSelect, badgeCaption, children }) {
    return (
        <li>
            <button
                className={`px-[0.5rem] py-[0.25rem] bg-transparent text-[#b0caf9]
                border-none flex items-center text-left pointer  ${isSelected ? "selected" : undefined}
                hover:text-white hover:bg-[#355767] 
                `}
                onClick={onSelect}
            >
                {children}
                <Badge key={badgeCaption} caption={badgeCaption}></Badge>
            </button>
            {isSelected && (
                <motion.div
                    //bar animation
                    layoutId="tab-indicator"
                    className=" border-[1.5px] border-sky-500 rounded-[8px] "
                />
            )}
        </li>
    );
}

export default function TasksTabs({
    selectedType,
    onSelectType,
    tasks,
    children,
}) {
    return (
        <>
            <menu className=" list-none  p-0 flex mb-[1rem]  m-0">
                <Tab
                    isSelected={selectedType === "active"}
                    onSelect={() => onSelectType("active")}
                    badgeCaption={tasks.active.length}
                >
                    Active
                </Tab>
                <Tab
                    isSelected={selectedType === "completed"}
                    onSelect={() => onSelectType("completed")}
                    badgeCaption={tasks.completed.length}
                >
                    Completed
                </Tab>
                <Tab
                    isSelected={selectedType === "failed"}
                    onSelect={() => onSelectType("failed")}
                    badgeCaption={tasks.failed.length}
                >
                    Failed
                </Tab>
            </menu>
            <div>{children}</div>
        </>
    );
}
