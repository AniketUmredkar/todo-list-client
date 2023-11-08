export const getHeaders = () => {
    return {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
    };
};

export const getAuthHeaders = () => {
    return {
        "Content-Type": "application/json",
    };
};
