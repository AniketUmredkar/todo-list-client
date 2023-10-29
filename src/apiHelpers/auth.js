export const loginUser = async (email, password) => {
    const fd = new FormData();
    fd.append("email", email);
    fd.append("password", password);
    try {
        return await fetch("http://localhost:8080/auth/login", { method: "POST", body: fd, credentials: "include" });
    } catch (e) {
        console.log(e);
        return false;
    }
};
