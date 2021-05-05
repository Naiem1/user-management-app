import {Router, Redirect } from '@reach/router';
import HomePage from './../pages/Home';
import UserListPage from './../pages/UsersList';
import AddNewUserPage from './../pages/AddNewUser';
import GroupsList from './../pages/GroupsList';
import AddNewGroup from './../pages/AddNewGroup';
import PageNotFound from './../pages/404';


const AppRouter = () => {
  return (
    <div style={{width: '100%'}}>
      <Router>
        <HomePage path="/" />
        <Redirect from="/home" to="/" noThrow />
        <UserListPage path="users" />
        <AddNewUserPage path="/createUsers" />
        <GroupsList path="/groups" />
        <AddNewGroup path="/createGroups"/>
        <PageNotFound default/>
      </Router>
    </div>
  );
};

export default AppRouter;