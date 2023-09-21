import TasksContextProvider from "./store/tasks-context"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
const App = () => {
  return (
    <div className="py-[5vh] w-full">
      <TasksContextProvider>
        <Header />
        <main>
          <Tasks />
        </main>
      </TasksContextProvider>
    </div>
  )
}

export default App