import { getHeaders } from "../utils/helpers";

export const getAllTasks = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/task`, { headers: getHeaders() });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const createTask = async (title) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/task/create`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                title: title,
            }),
        });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const updateTask = async (id, title, status) => {
    let body = {};
    if (title) {
        body.title = title;
    }
    if (status) {
        body.status = status;
    }
    try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/task/${id}`, {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(body),
        });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const deleteTask = async (id) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/task/${id}`, {
            method: "DELETE",
            headers: getHeaders(),
        });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};
