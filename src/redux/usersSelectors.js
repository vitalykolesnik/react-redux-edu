export const getUsers = (state) => {
    return state.usersPage.users;
};

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsLoading = (state) => {
    return state.usersPage.isLoading;
};
