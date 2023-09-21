import { useContext, useRef, useState } from "react";

import { TasksContext } from "../store/tasks-context.jsx";
import Modal from "./Modal.jsx";

import { motion, useAnimate, stagger } from "framer-motion";

export default function NewTask({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [scope, animate] = useAnimate();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addTask } = useContext(TasksContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const task = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
     
    };

    if (
      !task.title.trim() ||
      !task.description.trim() ||
      !task.deadline.trim() 
     
    ) {
      animate(
        "input,textarea",
        {
          x: [-10, 0, 20, 0],
        },
        {
          type: "spring",
          duration: 0.05,
          delay: stagger(0.05),
        }
      );
      return;
    }

    onDone();
    addTask(task);
  }

  return (
    <Modal title="New Task" onClose={onDone}>
      <form id="new-task" onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

      

        <p className=" new-task-actions
        flex justify-end gap-[1rem] mt-[1rem]
        ">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Task</button>
        </p>
      </form>
    </Modal>
  );
}
