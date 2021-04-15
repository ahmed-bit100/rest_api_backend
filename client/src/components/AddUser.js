import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addUser, getUsers } from "../redux/actions";

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
const addUserStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  fontSize: "25px",
  fontWeight: "800",
  color: "black",
  textAlign: "center",
  backgroundColor: "white",
  cursor: "pointer",
};

Modal.setAppElement("#root");

const AddUser = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button style={addUserStyle} onClick={openModal}>
        +
      </button>
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
              dispatch(addUser({ name, lastName, email, phone }));
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

export default AddUser;
