import addTask from "./addtask";
import deleteTask from "./deletetask";
import editTask from "./edittask";
import getAllTask from "./gettask";
import getOneTask from "./getone";


const taskViews = ({
    addTaskViews: addTask,
    editTaskViews: editTask,
    deleteTaskViews: deleteTask,
    getAllTaskViews: getAllTask,
    getOneTaskViews: getOneTask,
})

export default taskViews;