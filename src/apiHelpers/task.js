export const getAllTasks = async () => {
    try {
        const res = await fetch("http://localhost:8080/task", { credentials: "include" });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const createTask = async (title) => {
    const fd = new FormData();
    fd.append("title", title);
    try {
        const res = await fetch("http://localhost:8080/task/create", {
            method: "POST",
            body: fd,
            credentials: "include",
        });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const updateTask = async (id, title, status) => {
    const fd = new FormData();
    if (title) {
        fd.append("title", title);
    }
    if (status) {
        fd.append("status", status);
    }
    try {
        const res = await fetch(`http://localhost:8080/task/${id}`, {
            method: "PUT",
            body: fd,
            credentials: "include",
        });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const deleteTask = async (id) => {
    try {
        const res = await fetch(`http://localhost:8080/task/${id}`, {
            method: "DELETE",
            credentials: "include",
        });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};
