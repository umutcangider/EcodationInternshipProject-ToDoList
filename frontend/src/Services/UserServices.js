// axios import added
import axios from 'axios';

// Sabit URL
const USER_URL = "http://localhost:8080/v1/";

class UserServices {

    // CREATE USER
    // POST => http://localhost:8080/v1/user
    createUser(userDto) {
        return axios.post(USER_URL + "user", userDto);
    }

    // LIST USER
    // GET =>  http://localhost:8080/v1/list/users
    getAllUsers() {
        return axios.get(USER_URL + "list/users");
    }


    // ADD TO DO
    // POST => http://localhost:8080/v1/{id}/addTodo
    addTodo(id, todoDto) {
        return axios.post(USER_URL + id + "/addTodo", todoDto);
    }

    // FIND USER
    // GET => http://localhost:8080/v1/find/user/{id}
    getUserById(id) {
        return axios.get(USER_URL + "find/user/" + id);
    }


    // DELETE USER
    // DELETE => http://localhost:8080/v1/delete/user/{id}
    deleteUser(id) {
        return axios.delete(USER_URL + "delete/user/" + id);
    }

    // LIST TO DO FOR USER
    // GET => http://localhost:8080/v1/list/{id}/todos
    getAllTodosForUser(id) {
        return axios.get(USER_URL + "list/" + id + "/todos");
    }

    // UPDATE TO DO FOR USER
    // PUT => http://localhost:8080/v1/{userId}/update/todo/{todoId}
    updateTodo(userId, todoId, todoDto) {
        return axios.put(USER_URL + userId + "/update/todo/" + todoId, todoDto);
    }

    // TO DO TOGGLE isCompleted
    // PUT => http://localhost:8080/v1/{userId}/toggle/todo/{todoId}
    toggleTodoCompleted(userId, todoId) {
        return axios.put(USER_URL + userId + "/toggle/todo/" + todoId)
    }

    // DELETE TO DO FOR USER
    // DELETE => http://localhost:8080/v1/delete/user/{userId}/{todoId}
    deleteTodo(userId, todoId) {
        return axios.delete(USER_URL + "delete/user/" + userId + "/" + todoId)
    }
}
export default new UserServices();