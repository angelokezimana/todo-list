function App() {
    return (
        <div className="container border border-secondary rounded p-4 mt-3 mb-3">
            <div className="row">
                <div className="col fw-bolder fs-2">To-Do List</div>
                <div className="col text-end">
                    <button className="btn btn-sm btn-danger mt-1">
                        Close
                    </button>
                </div>
            </div>

            <form className="mb-3">
                <div className="mt-4 mb-3">
                    <label for="addTask" className="form-label">
                        Task
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="addTask"
                        placeholder="Add Task"
                    />
                </div>
                <div className="mb-3">
                    <label for="dayTime" className="form-label">
                        Day & Time
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="dayTime"
                        placeholder="Day & Time"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="setReminder"
                    />
                    <label className="form-check-label" for="setReminder">
                        Set Reminder
                    </label>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-sm btn-dark block">
                        Save Task
                    </button>
                </div>
            </form>

            <div className="row border-start border-4 border-success bg-light ms-1 me-1 mb-2">
                <div className="col">
                    <h4>Doctors appointment</h4>
                    <p>Feb 5th at 2:30pm</p>
                </div>
                <div className="col text-end">
                    <button className="btn btn-sm">
                        <span className="text-danger fw-bolder fs-2">
                            &times;
                        </span>
                    </button>
                </div>
            </div>

            <div className="row border-start border-4 border-success bg-light ms-1 me-1 mb-2">
                <div className="col">
                    <h4>Meeting at school</h4>
                    <p>Feb 6th at 1:30pm</p>
                </div>
                <div className="col text-end">
                    <button className="btn btn-sm">
                        <span className="text-danger fw-bolder fs-2">
                            &times;
                        </span>
                    </button>
                </div>
            </div>

            <div className="row bg-light ms-1 me-1 mb-2">
                <div className="col">
                    <h4>Dinner with Mom</h4>
                    <p>Feb 8th at 7:00pm</p>
                </div>
                <div className="col text-end">
                    <button className="btn btn-sm">
                        <span className="text-danger fw-bolder fs-2">
                            &times;
                        </span>
                    </button>
                </div>
            </div>

            <div className="text-center">
                Copyright &copy; 2021 <br />
                <button className="btn btn-sm btn-link">About</button>
            </div>
        </div>
    );
}

export default App;
