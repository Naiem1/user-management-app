import React from 'react';

const NewGroup = () => {

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  const handleClick = () => {
    console.log('Click')
  }

  return (
    <section className="new-group">
      <div className="container content-body">
        <div className="heading">
          <h4>Add Group</h4>
        </div>
        <div className="input-field">
          <label>Group Name:</label>
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <button onClick={handleClick}>Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default NewGroup;