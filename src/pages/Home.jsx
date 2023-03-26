import { useEffect, useState } from "react";
import Header from "../components/Header";
import SelectFilter from "../components/SelectFilter";
import axiosClient from "../axios";
import DateConverter from "../components/DateConverter";
import Spinner from "../components/Spinner";
import { filterUsers } from "../helpers/UserFilter";
import NoRecord from "../components/NoRecord";
import UsersTable from "../components/Users/UsersTable";

export const filters = [
  { value: 0, display: "all" },
  { value: 1, display: "20 and below" },
  { value: 2, display: "21 to 39" },
  { value: 3, display: "40 and above" },
];

const Home = () => {
  const [users, setUsers] = useState([]);
  const [usersDisplay, setUsersDisplay] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    let fetchedUsers = [];
    axiosClient
      .get("https://www.mocky.io/v2/5d73bf3d3300003733081869", {
        timeout: 10000,
      })
      .then((res) => {
        fetchedUsers = res.data;
        setUsers(fetchedUsers);
        setUsersDisplay(fetchedUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeFilter = (filter) => {
    setFilter(filter);
    let newUsers = filterUsers(filter, users);
    setUsersDisplay(newUsers);
  };

  return (
    <div className="content">
      <Header text={"DISTRICT MANAGER"} />
      <div className="container">
        <div className="select-container">
          <SelectFilter
            filter={filter}
            changeFilter={changeFilter}
            filters={filters}
          />
        </div>

        <div className="tb-container">
          {users.length === 0 ? (
            <Spinner />
          ) : usersDisplay.length > 0 ? (
            <UsersTable users={usersDisplay} />
          ) : (
            <NoRecord />
          )}
        </div>
        <div className="date-container">
          <DateConverter />
        </div>
      </div>
    </div>
  );
};

export default Home;
