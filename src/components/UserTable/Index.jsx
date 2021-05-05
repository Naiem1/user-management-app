import React from 'react';

const UserTable = () => {
  return (
    <section className="user-table">
      <div className="container content-body">
        <div className="heading">
          <h4>You can check the list of users, change the names, assigning or removing them from existing groups.</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Groups</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default UserTable;