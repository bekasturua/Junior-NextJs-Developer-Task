import classes from "./Users.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import User from "./User";

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
              <Link
                href={{ pathname: "/edit-user", query: { userId: user.id } }}
                key={user.id}
              >
                <User user={user} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;
