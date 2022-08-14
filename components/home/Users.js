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
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                  <p>{user.dateOfBirth}</p>
                  <p>{user.statusId}</p>
                  <p>{user.roleId}</p>
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
