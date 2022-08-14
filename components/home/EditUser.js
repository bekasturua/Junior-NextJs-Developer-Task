import classes from "./EditUser.module.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

function EditUser({ fetchedUser }) {
  const [user, setUser] = useState(fetchedUser);
  const router = useRouter();

  const editSubmitHandler = async (event) => {
    const res = await axios.put(`http://localhost:3000/users/${user.id}`, user);
    router.reload()
    router.replace(`/edit-user?userId=${user.id}`);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={editSubmitHandler}>
        <div className={classes.control}>
          <label>First Name</label>
          <input
            type="text"
            required
            id="first_name"
            onChange={(event) => {
              setUser({ ...user, firstName: event.target.value });
            }}
            value={user.firstName}
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
            value={user.lastName}
          />
        </div>
        <div className={classes.control}>
          <label>Age</label>
          <input
            type="number"
            required
            id="age"
            onChange={(event) => {
              setUser({ ...user, age: Number(event.target.value) });
            }}
            value={user.age}
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
            value={user.statusId}
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
            value={user.roleId}
          />
        </div>
        <div className={classes.actions}>
          <button>Edit User</button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
