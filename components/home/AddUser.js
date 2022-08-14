import classes from "./AddUser.module.css";
import axios from "axios";
import { useState } from "react";

function AddUser() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    statusId: 0,
    roleId: 0,
  });

  const addSubmitHandler = async () => {
    const res = await axios.post("http://localhost:3000/users", user);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={addSubmitHandler}>
        <div className={classes.control}>
          <label>First Name</label>
          <input
            type="text"
            required
            id="first_name"
            onChange={(event) => {
              setUser({ ...user, firstName: event.target.value });
            }}
          />
        </div>
        <div className={classes.control}>
          <label>Last Name</label>
          <input
            type="text"
            required
            id="last_name"
            onChange={(event) => {
              setUser({ ...user, lastName: event.target.value });
            }}
          />
        </div>
        <div className={classes.control}>
          <label>Date Of Birth</label>
          <input
            type="date"
            required
            id="date_of_birth"
            onChange={(event) => {
              setUser({ ...user, dateOfBirth: event.target.value });
            }}
          />
        </div>
        <div className={classes.control}>
          <label>Status</label>
          <input
            type="number"
            required
            id="status"
            min={1}
            max={2}
            onChange={(event) => {
              setUser({ ...user, statusId: Number(event.target.value) });
            }}
          />
        </div>
        <div className={classes.control}>
          <label>Role</label>
          <input
            type="number"
            required
            id="role"
            min={1}
            max={2}
            onChange={(event) => {
              setUser({ ...user, roleId: Number(event.target.value) });
            }}
          />
        </div>
        <div className={classes.actions}>
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
