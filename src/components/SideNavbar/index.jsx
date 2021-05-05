import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "@reach/router";



const SideNavbar = () => {
  return (
    <aside>
      <nav className="sideNav">
        <ul className="sideNav__menu">
          <li>
            <Link to="/" href="#home">
              <HomeIcon className="sideNav__icon" /> 
              Home
            </Link>
          </li>
          <hr/>
          <li>
            <Link to="/users" href="#userList">
              <PeopleIcon className="sideNav__icon" />
              User List
            </Link>
          </li>
          <li>
            <Link to="/createUsers" href="#newUser">
              <PersonAddIcon className="sideNav__icon" />
              Add New User
            </Link>
          </li>
          <hr/>
          <li>
            <Link to="/groups" href="#groupList">
              <GroupAddIcon className="sideNav__icon" />
              Groups List
            </Link>
          </li>
          <li>
            <Link to="/createGroups" href="#newGroup">
              <AddIcon className="sideNav__icon"/> 
              Add New Group
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavbar;