import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctors appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at School",
            day: "Feb 6th at 1:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Food shooping",
            day: "Feb 5th at 9:30am",
            reminder: false,
        },
    ]);

    const [showAddTask, setShowAddTask] = useState(false);

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 100000000000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container border border-secondary rounded p-4 mt-3 mb-3">
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAddTask={showAddTask}
            />

            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                <p className="text-secondary text-center mt-4 mb-4">
                    No Tasks to show !
                </p>
            )}

            <Footer />
        </div>
    );
}

export default App;
