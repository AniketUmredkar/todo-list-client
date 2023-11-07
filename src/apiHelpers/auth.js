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

export const createUser = async (firstName, lastName, email, password) => {
    const fd = new FormData();
    fd.append("email", email);
    fd.append("password", password);
    fd.append("first_name", firstName);
    fd.append("last_name", lastName);
    try {
        return await fetch("http://localhost:8080/auth/sign-up", { method: "POST", body: fd, credentials: "include" });
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const logOutUser = async () => {
    try {
        return await fetch("http://localhost:8080/auth/logout", { method: "POST", credentials: "include" });
    } catch (e) {
        console.log(e);
        return false;
    }
};
