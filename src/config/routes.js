import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    RouterHandler,
    Link,
    IndexRoute,
    withRouter
} from 'react-router-dom';

// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory

// Reference the high-level components
import Main from "../components/Main";
import Search from "../components/Search";
// import User from "../components/User";
// import Account from "../components/Account";
// import Signup from "../components/children/grandchildren/Signup";
// import Login from "../components/children/grandchildren/Login";
import Profile from "../components/Profile";
// import Chat from "../components/children/grandchildren/Chat";
// import Contract from "../components/children/grandchildren/Contract";
// import UserSearchProfile from "../components/children/grandchildren/Search/userSearch/UserSearchProfile";
// import Home from "../components/children/grandchildren/Home";


// const Routes = () => (
//     <Router history={ withRouter }>
//         <Route path="/" component={Profile}>
//             {/*<Route path="Account" component={Account}/>*/}
//             {/*<Route path="Signup" component={Signup}/>*/}
//             {/*<Route path="Login" component={Login}/>*/}
//             {/*</Route>*/}
//             {/*<Route path="Profile/:id" component={Profile}>*/}
//             <Route path="/Search" component={Search}/>
//             {/*<Route path="UserSearchProfile" component={UserSearchProfile}/>*/}
//             {/*</Route>*/}
//             {/*<Route path="User" component={User}/>*/}
//             {/*<Route path="Map" component={Map}/>*/}
//             {/*<Route path="Chat" component={Chat}/>*/}
//             {/*<Route path="Contract" component={Contract}/>*/}
//             {/*</Route>*/}
//
//             {/*<IndexRoute component={Account}/>*/}
//         </Route>
//     </Router>
// )

const routes = [
    {
        path: '/profile',
        component: Profile,
        routes: [
            {
                path: '/profile/search',
                component: Search
            }
        ]
    }
]

const RouteConfigExample = () => (
    <Router>
        <div>
            <Route exact path="/profile" component={Profile}>
                <Route path="/profile/search" component={Search}/>
            </Route>
        </div>
    </Router>
)

export default RouteConfigExample
