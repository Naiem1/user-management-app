import React from 'react';
import Header from '../../components/Header';
import UserTable from '../../components/UserTable/Index';

const UsersListPage = () => {
  return (
    <div>
      <Header title="users list"/>
      <UserTable/>
    </div>
  );
};

export default UsersListPage;