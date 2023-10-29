export const loginUser = async (email, password) => {
    const fd = new FormData();
    fd.append("email", email);
    fd.append("password", password);
    try {
        const res = await fetch("http://localhost:8080/auth/login", { method: "POST", body: fd });
        const parsedRes = await res.json();
        console.log(parsedRes);
    } catch (e) {
        console.log(e);
    }
};
