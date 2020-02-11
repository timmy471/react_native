import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        const getData = async () =>{
            try{
              const res = await fetch('https://test.comeriver.com/timmy/return.php', {
                method: 'GET'
              });
              const users = await res.json();
             dispatch(fetchUsersSuccess(users))
              console.log(users);
              }
              catch(error){
                  const errorMsg = error.message
                  dispatch(fetchUsersFailure(errorMsg))
                console.log(errorMsg)
              }
            }
          }
}