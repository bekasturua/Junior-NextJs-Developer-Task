import classes from "./Users.module.css";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.user.users);

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
          {users.map((user) => {
            return (
              <div key={user.id} className={classes.users}>
                <div >
                  <p>{user.FirstName}</p>
                  <p>{user.LastName}</p>
                  <p>{user.DateOfBirth}</p>
                  <p>{user.StatusId}</p>
                  <p>{user.RoleId}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;
