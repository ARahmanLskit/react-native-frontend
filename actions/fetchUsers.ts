import { loadUsers, loadUsersSuccess, loadUsersError } from './users';

/**
 * 
 */
function fetchUsers() {
    return (dispatch: any) => {
        dispatch(loadUsers());
        fetch('https://native-backend-yqc1.onrender.com/api/v1/users')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                dispatch(loadUsersError())
            }
            dispatch(loadUsersSuccess(res));
            return res.products;
        })
        .catch(() => {
            dispatch(loadUsersError());
        })
    }
}

export default fetchUsers;