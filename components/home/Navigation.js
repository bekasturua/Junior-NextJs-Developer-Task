import Link from "next/link";

import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Users</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Users</Link>
          </li>
          <li>
            <Link href="/add-user">Add User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
