import classes from "./User.module.css";

function User({ user }) {
  return (
    <div>
      <div className={classes.user}>
        <div>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.age}</p>
          <p>{user.statusId}</p>
          <p>{user.roleId}</p>
        </div>
      </div>
      <div>
        <button>Delete User</button>
      </div>
    </div>
  );
}

export default User;
