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

export const createUser = async (firstName, lastName, email, password, confirmPassword) => {
    const fd = new FormData();
    fd.append("email", email);
    fd.append("password", password);
    fd.append("confirm_password", confirmPassword);
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

export const forgotPassword = async (email) => {
    const fd = new FormData();
    fd.append("email", email);
    try {
        return await fetch("http://localhost:8080/auth/forgot-password", {
            method: "POST",
            body: fd,
            credentials: "include",
        });
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const resetPassword = async (password, confirmPassword, resetToken) => {
    const fd = new FormData();
    fd.append("password", password);
    fd.append("confirm_password", confirmPassword);
    fd.append("reset_token", resetToken);
    try {
        return await fetch("http://localhost:8080/auth/reset-password", {
            method: "POST",
            body: fd,
            credentials: "include",
        });
    } catch (e) {
        console.log(e);
        return false;
    }
};
