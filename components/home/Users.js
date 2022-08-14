import classes from "./Users.module.css";

function Users() {
  return (
    <section>
      <div>
        <input
          placeholder="Search..."
          className={classes.input}
          type="text"
          name="name"
        />
      </div>
      <div>
        <div className={classes.d}>
          <div className={classes.users}>
            <div>
              <p>FirstName</p>
              <p>LastName</p>
              <p>DateOfBirth</p>
              <p>Age</p>
              <p>Status</p>
              <p>Role</p>
            </div>
          </div>
          <div className={classes.users}>
            <div>
              <p>FirstName</p>
              <p>LastName</p>
              <p>DateOfBirth</p>
              <p>Age</p>
              <p>Status</p>
              <p>Role</p>
            </div>
          </div>
          <div className={classes.users}>
            <div>
              <p>FirstName</p>
              <p>LastName</p>
              <p>DateOfBirth</p>
              <p>Age</p>
              <p>Status</p>
              <p>Role</p>
            </div>
          </div>
          <div className={classes.users}>
            <div>
              <p>FirstName</p>
              <p>LastName</p>
              <p>DateOfBirth</p>
              <p>Age</p>
              <p>Status</p>
              <p>Role</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Users;
