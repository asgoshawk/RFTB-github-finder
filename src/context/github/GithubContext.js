import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Get initail users (testing purposes)
    // const fetchUsers = async () => {
    //     setLoading();
    //     const res = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     });
    //     const data = await res.json();
    //     // setUsers(data);
    //     // setLoading(false);
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,
    //     })
    // };

    // Search users
    // const searchUsers = async (text) => {
    //     setLoading();
    //     const params = new URLSearchParams({
    //         q: text,
    //     })
    //     const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     });
    //     const { items } = await res.json();
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: items,
    //     })
    // };

    // // Get specific user
    // const getUser = async (login) => {
    //     setLoading();
    //     const res = await fetch(`${GITHUB_URL}/users/${login}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     });
    //     if (res.status === 404) {
    //         window.location = '/notfound'
    //     } else {
    //         const data = await res.json();
    //         dispatch({
    //             type: 'GET_USER',
    //             payload: data,
    //         })
    //     }
    // };

    // // Get user repos
    // const getUserRepos = async (login) => {
    //     setLoading();
    //     const params = new URLSearchParams({
    //         sort: 'created',
    //         per_page: 10,
    //     })
    //     const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     });
    //     const data = await res.json();
    //     dispatch({
    //         type: 'GET_REPOS',
    //         payload: data,
    //     })
    // };

    // Clear users
    // const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

    // Set loading 
    // const setLoading = () => dispatch({ type: 'SET_LOADING' });

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;