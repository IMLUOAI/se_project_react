import "../blocks/modalWithForm/modalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

const EditProfileModal = ({ isOpen, handleCloseModal, handleEditProfile }) => {
   const currentUser = useContext(CurrentUserContext);

    const [data, setData] = useState({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    
    useEffect(() => {
        if(isOpen) {
            setData({
             name: currentUser.name || "",
             avatar: currentUser.avatar || "",
            });
        }
    }, [isOpen, currentUser]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleEditProfile(data);
      };

    return (
            <ModalWithForm
            buttonText="Save changes"
            title="Change profile data"
            onClose={handleCloseModal}
            isOpen={isOpen}
            onSubmit={handleSubmit}
            >
                <label className="modal_label">
                   Name*
                <input
                  id="name"
                  required
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={handleChange}
                  className="modal_input"
                  minLength="2"
                  maxLength="40"
                />
                <span className="modal_error"></span>
                </label>
                <label className="modal_label">
                    Avatar
                <input
                  id="avatar"
                  required
                  name="url"
                  type="text"
                  value={data.avatar}
                  onChange={handleChange}
                  className="modal_input"
                  minLength="2"
                  maxLength=""
                />
                <span className="modal_error"></span>
                </label>
            </ModalWithForm>
    )
}

export default EditProfileModal;