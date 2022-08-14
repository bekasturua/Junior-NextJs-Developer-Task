import classes from "./Users.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

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
              <Link href={{ pathname: '/edit-user', query: { userId: user.id } }} key={user.id}>
                <div className={classes.users}>
                  <div>
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                    <p>{user.age}</p>
                    <p>{user.statusId}</p>
                    <p>{user.roleId}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;
