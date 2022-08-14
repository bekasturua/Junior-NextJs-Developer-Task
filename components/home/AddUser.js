import classes from "./AddUser.module.css";

function AddUser() {
  return (
    <div>
      <form className={classes.form}>
        <div className={classes.control}>
          <label>First Name</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label>Second Name</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Date Of Birth</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Age</label>
          <input type="text" required id="description" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Status</label>
          <input type="text" required id="description" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Role</label>
          <input type="text" required id="description" />
        </div>
        <div className={classes.actions}>
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
