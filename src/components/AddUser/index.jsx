import React from 'react';

const AddUser = () => {


  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleCheckbox = (e) => {
    console.log(e.target.checked)
  }

  return (
    <section className="add-user">
      <div className="content-body container adduser-container">
        <div style={{display: 'flex'}}>
        <div className="input-field">
          <h4>Add User</h4>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="User Name"
            onChange={handleChange}
          />
        </div>
          <div className="assign-side">
            <h4>Assign Group</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Assign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Web developer</td>
                  <td>
                    <input
                      type="checkbox"
                      name="checkbox"
                      onChange={handleCheckbox}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="btn">
          <button>Save Changes</button>  
        </div>
      </div>
    </section>
  );
};

export default AddUser;