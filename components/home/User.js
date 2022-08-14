import classes from "./User.module.css";

function User(props) {
  return (
    <div>
      <div className={classes.user}>
        <div>
          <p>{props.user.firstName}</p>
          <p>{props.user.lastName}</p>
          <p>{props.user.age}</p>
          <p>{props.user.statusId}</p>
          <p>{props.user.roleId}</p>
        </div>
      </div>
      <div>
        <button onClick={() => props.onDeleteHandler(props.user.id)}>Delete User</button>
      </div>
    </div>
  );
}

export default User;
