import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import UserCard from "../UserCard";
import "./style.css";

const UserList = () => {
  const { users, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          {" "}
          <h1> loading...</h1>{" "}
        </div>
      ) : (
        <div className="user-list">
          {users.map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
