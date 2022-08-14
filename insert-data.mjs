import axios from "axios";
import roles from "./data/role.data.mjs";
import statuses from "./data/status.data.mjs";
import users from "./data/user.data.mjs";

try {
  for (let user of users) {
    const response = await axios.post("http://localhost:3000/users", user);
    console.log(response);
  }
} catch (error) {
  console.log(error);
}

try {
  for (let status of statuses) {
    const response = await axios.post("http://localhost:3000/statuses", status);
    console.log(response);
  }
} catch (error) {
  console.log(error);
}

try {
  for (let role of roles) {
    const response = await axios.post("http://localhost:3000/roles", role);
    console.log(response);
  }
} catch (error) {
  console.log(error);
}
