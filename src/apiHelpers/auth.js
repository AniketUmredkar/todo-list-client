import { getAuthHeaders } from "../utils/helpers";

export const loginUser = async (email, password) => {
    try {
        return await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const createUser = async (firstName, lastName, email, password, confirmPassword) => {
    try {
        return await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/sign-up`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                confirm_password: confirmPassword,
            }),
        });
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const forgotPassword = async (email) => {
    try {
        return await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/forgot-password`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                email: email,
            }),
        });
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const resetPassword = async (password, confirmPassword, resetToken) => {
    try {
        return await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/reset-password`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                password: password,
                confirm_password: confirmPassword,
                reset_token: resetToken,
            }),
        });
    } catch (e) {
        console.log(e);
        return false;
    }
};
