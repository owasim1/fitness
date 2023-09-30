export const loginUser = (payload: LoginPayload) => {
    return {
        type: 'user/login',
        payload,
    };
};