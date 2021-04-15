import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../../redux/actions";
import EditUser from "../EditUser";
import "./style.css";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="userCard">
      <h3>
        {" "}
        {user.name} {user.lastName}{" "}
      </h3>
      <h3> {user.email} </h3>
      <h3> {user.phone} </h3>
      <EditUser user={user} />
      <button
        onClick={() => {
          dispatch(deleteUser(user._id));
          dispatch(getUsers());
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default UserCard;
