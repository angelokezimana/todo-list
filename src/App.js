import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

function App() {
    const [tasks, setTasks] = useState([]);

    const [showAddTask, setShowAddTask] = useState(false);

    useEffect(() => {
        const getTasks = async () => {
            const getTasksFromServer = await fetchTasks();
            setTasks(getTasksFromServer);
        };

        getTasks();
    }, []);

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();

        return data;
    };

    // Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        return data;
    };

    // Add Task
    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(task),
        });

        const newTask = await res.json();

        setTasks([...tasks, newTask]);
    };

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });

        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Reminder
    const toggleReminder = async (id) => {
        const getTask = await fetchTask(id);
        const updatedTask = { ...getTask, reminder: !getTask.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        });

        const data = await res.json();

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
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
