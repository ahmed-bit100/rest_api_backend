import axios from "axios";
import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from "../actionTypes";
export const getUsers = () => (dispatch) => {
  axios
    .get("/get_users")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => alert("get error"));
};

export const addUser = ({ name, lastName, email, phone }) => (dispatch) => {
  const newUser = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
  };
  axios
    .post("/add_users", newUser)
    .then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((error) => alert("add errorr"));
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/delete_user/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER,
        payload: res.data,
      });
    })
    .catch((err) => alert("delete error"));
};

export const editUser = (id, name, lastName, email, phone) => (dispatch) => {
  const editedUser = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
  };
  axios
    .put(`/edit_user/${id}`, editedUser)
    .then((res) => {
      dispatch({
        type: EDIT_USER,
        payload: res.data,
      });
    })
    .catch((err) => alert("edit error"));
};
