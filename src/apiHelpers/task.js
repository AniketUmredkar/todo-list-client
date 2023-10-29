export const getAllTasks = async () => {
    try {
        const res = await fetch("http://localhost:8080/task", { credentials: "include" });
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
};
