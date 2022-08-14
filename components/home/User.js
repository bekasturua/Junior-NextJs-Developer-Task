import classes from "./User.module.css";

function User() {
  return (
    <div>
      <div>
        <h1>User</h1>
        <p>LastName</p>
        <p>DateOfBirth</p>
        <p>Age</p>
        <p>Status</p>
        <p>Role</p>
      </div>
      <div>
        <button>Delete User</button>
        <button>Edit User</button>
      </div>
    </div>
  );
}

export default User;
