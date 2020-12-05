import React from "react";
import { Link } from "react-router-dom";
import ShortPortfolio from "../shortPortfolio/ShortPortfolio";
import { getUserRegister } from "../../data/Data";

function Modal({ companyDetails }) {
  const handleGoToPortfolio = () => {
    window
      .open(
        `${getUserRegister() ? "user" : "company"}/portfolio/${
          companyDetails.id
        }`
      )
      .focus();
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                <b>{companyDetails.title}</b>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <Link to="/filter">
                  <span aria-hidden="true">&times;</span>
                </Link>
              </button>
            </div>
            <div className="modal-body">
              <ShortPortfolio
                mediumContent={companyDetails.content}
                SampleImages={companyDetails.image}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleGoToPortfolio}
              >
                Go to our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
