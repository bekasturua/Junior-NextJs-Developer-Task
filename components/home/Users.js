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
      <div className={classes.users}>
        <div>
          <p>FirstName</p>
          <p>LastName</p>
          <p>DateOfBirth</p>
        </div>
      </div>
    </section>
  );
}

export default Users;
