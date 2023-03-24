import { filters } from "../pages/Home";

function filterUsers(filter, users) {
  if (filters[0].value === Number(filter)) {
    return users;
  } else if (filters[1].value === Number(filter)) {
    return users.filter((user) => user.age <= 20 && user.age > 0);
  } else if (filters[2].value === Number(filter)) {
    return users.filter((user) => user.age >= 21 && user.age <= 39);
  } else if (filters[3].value === Number(filter)) {
    return users.filter((user) => user.age >= 40);
  } else {
    return users;
  }
}

export { filterUsers };
