import React from 'react';

const HomeContent = () => {
  return (
    <section >
      <div className="home-content container content-body">
        <div className="left">
          <div className="heading">
            <p>With this Application you are able to to following </p>
          </div>
          <ul>
            <li>You can add a group with the same name you want</li>
            <li>You can add a user with any name you wish any name you wish to ans existing group</li>
            <li>you can remove a user from the group</li>
            <li>You can remove group a group if there aren't any user on it</li>
            <li>You can change the group and user name</li>
            <li>You can watch a list of existing users and groups.</li>
          </ul>
        </div>
        <div className="right">
          <div className="heading">
            <p>You can't perform these actions:</p>
            <ul>
              <li>Create a user Without assigning it
                to a group first.</li>
              <li>Remove a group if it has users on it.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;