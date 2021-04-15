import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editUser, getUsers } from "../redux/actions";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const EditUser = ({ user }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(editUser(user._id, name, lastName, email, phone));
              dispatch(getUsers());
              closeModal();
            }}
          >
            Confirm
          </button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditUser;
