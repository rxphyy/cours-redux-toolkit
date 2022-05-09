import { createSlice, configureStore } from "@reduxjs/toolkit"; 

const toDoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true }
    ],

    reducers: {

        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
              };
          
            state.push(newTask);
        },

        toggleTask: (state, action) => {
            const currentTask = state.find(task => task.id === action.payload);
            currentTask.done = !currentTask.done;
        },

        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        }
    }
})

export const { addTask, toggleTask, deleteTask } = toDoSlice.actions;

export const store = configureStore({
    reducer: {
        todo: toDoSlice.reducer
    }
})