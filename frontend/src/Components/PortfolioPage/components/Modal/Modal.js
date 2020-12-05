import React, { useState } from "react";

function Modal(props) {
  const [saved, setSaved] = useState(false);
  const [value, setValue] = useState(null);

  const handleSave = () => {
    setSaved(true);
    props.function(value);
  };
  const handleTextChange = (e) => {
    setValue(e.target.value);
  };
  const onCloseModal = () => {
    setSaved(false);
  };
  const propsText = () => {
    return (
      <form>
        <div className="form-group">
          <label for="message-text" className="col-form-label">
            Write your text here :
          </label>
          <textarea
            className="form-control"
            id="message-text"
            placeholder=""
            onChange={handleTextChange}
          ></textarea>
        </div>
      </form>
    );
  };
  const handleChange = (event) => {
    setValue(URL.createObjectURL(event.target.files[0]));
  };
  const propsFile = () => {
    return (
      <div>
        <input type="file" onChange={handleChange} />
        <img src={value} alt="inputImage" width="100%" height="100%" />
      </div>
    );
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="exampleModalLabel"
              style={{ color: "black" }}
            >
              Edit
            </h5>
          </div>
          <div className="modal-body">
            {props.type === "text" ? propsText() : ""}
            {props.type === "file" ? propsFile() : ""}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className={`btn btn-primary ${saved ? "d-none" : ""}`}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
