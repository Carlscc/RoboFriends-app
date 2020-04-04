import { 
    CHANGE_SEARCH_FIELD ,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from './constants';



//this action will take user input and returns an object
export const setSearchField = (text) => ({
    type: 'CHANGE_SEARCH_FIELD',//use a variable not a string, avoid bugs in spelling errors
    //sending whatever data is needed to reducer (what the user enters)
    payload: text
})

//requires thunkMiddleware
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
      //coverts the response to JSON format
      .then(response=> response.json())
      .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error }))
}