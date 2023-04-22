import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/task/api/v1/tasks/'
    // baseURL: 'https://sunsetsteve.pythonanywhere.com/task/api/v1/tasks/'
})

export function getAllTask(){
    return taskApi.get('/');
}

export function getTask(id){
    return taskApi.get(`/${id}/`);
}

export function createTask(task){
    return taskApi.post('/', task)
}

export function updateTask(id, task){
    console.log(task);
    console.log(id);
    return taskApi.put(`/${id}/ `, task)
}

export function deleteTask(id){
    return taskApi.delete(`/${id}/`)
}