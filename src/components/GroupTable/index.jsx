import React from 'react';

const GroupTable = () => {
  return (
    <section className="group-table">
      <div className="container content-body">
        <table>
          <thead>
            <tr>
              <th>Groups</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Web Developer</td>
              <td>Actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GroupTable;