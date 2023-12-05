/* eslint-disable react/prop-types */
const Modal = ({ isOpen, onClose, content }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Modal;
