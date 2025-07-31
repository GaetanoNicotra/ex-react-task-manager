import { createContext } from "react";
import useTasks from "../hooks/useTasks";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    // recupero le funzioni di get, modifica e delete dal custom hook
    const taskData = useTasks();

    return (
        // passo al provider tramite lo spread tutte le funzioni del custom hook
        <TaskContext.Provider value={{ ...taskData }}>
            {children}
        </TaskContext.Provider>
    );
}


export default TaskContext;