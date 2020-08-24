export let users = [];

export const getAutoSuggestUsers = (loginSubstring, limit) => {
    const newListUsers = users.slice(0, limit).filter(user => user.login.indexOf(loginSubstring) === 0);
    const sorted = newListUsers.sort((first, second) => first.login > second.login || -1);

    return sorted;
};