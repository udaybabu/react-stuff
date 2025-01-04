import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./local.css";


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>Close</button>
                {children}
            </div>
            <div className="modal-overlay" onClick={onClose}></div>
        </div>,
        document.getElementById('modal-root')
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

const Protals = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (<>
        <h1>React Portals Example</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>This is a modal</h2>
            <p>Content inside the modal</p>
        </Modal>
    </>)
}
export default Protals;