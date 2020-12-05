import React, { useEffect, useState } from "react";
import "./Filter.css";
import Modal from "../Modal/Modal";
import Cards from "../Cards/Cards";
import NotFound from "./NotFound";
import { COMPANIES } from "../../data/CompaniesData";
import Navbar from "../Home/Navbar/Navbar";

function Filter() {
  useEffect(() => {
    document.title = "Filter Events";
  }, []);

  let filteredCompanies = [];

  const [State, setState] = useState("");
  const [Event, setEvent] = useState("");
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);
  const [showPrice, setShowPrice] = useState(false);
  const [modalValue, setModalValue] = useState({});

  const handleMinPriceChange = (e) => {
    setMinVal(e.target.value * 1000);
  };
  const handleMaxPriceChange = (e) => {
    setMaxVal(e.target.value * 1000);
  };
  const showModal = (id) => {
    const comp = COMPANIES.map((company) => {
      if (company.id === id) {
        setModalValue(company);
        return company;
      }
      return "";
    });
    return comp;
  };
  const handleOnEventChange = (e) => {
    setEvent(e.target.value);
  };
  const handleOnStateChange = (e) => {
    setState(e.target.value);
  };
  const filteredCompaniesAlgo = () => {
    filteredCompanies = COMPANIES.filter((company) => {
      let isState = false,
        isEvent = false;
      for (let i = 0; i < company.events.length; i++) {
        if (
          Object.keys(Object.values(Object.values(company.events))[i])[0] ===
          Event
        ) {
          isEvent = true;
          break;
        }
      }
      for (let i = 0; i < company.states.length; i++) {
        if (company.states[i] === State) {
          isState = true;
          break;
        }
      }
      if (State === "" && Event === "") {
        return false;
      } else if (State === "" && Event !== "") {
        if (isEvent) {
          return true;
        }
        return false;
      } else if (State !== "" && Event === "") {
        if (isState) {
          return true;
        }
        return false;
      } else {
        if (isEvent && isState) {
          return true;
        }
        return false;
      }
    });
    return filteredCompanies;
  };

  return (
    <div className="filterPage">
      <Navbar />
      <Modal companyDetails={modalValue} />
      <div className="filterPage__main">
        <div className="filterPage__content">
          <div className="filterPage__content__search">
            <form>
              <div class="form-row">
                <div class="form-group m-2 p-2">
                  <label for="inputState">Event</label>
                  <select
                    id="inputState"
                    className="form-control"
                    onChange={handleOnEventChange}
                  >
                    <option selected></option>
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Reception</option>
                    <option>Wedding</option>
                  </select>
                </div>
                <div className="form-group m-2 p-2">
                  <label for="inputState">State</label>
                  <select
                    id="inputState"
                    className="form-control"
                    onChange={handleOnStateChange}
                  >
                    <option selected></option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <div className="form-group m-2 p-2">
                  <label for="inputState">City</label>
                  <input id="inputState" className="form-control" />
                </div>
                <div className="form-group m-2 p-2 d-flex flex-column">
                  <label for="inputState">Date and Time</label>
                  <input
                    id="inputState"
                    className="form-control"
                    type="datetime-local"
                  />
                </div>
                <div className=" m-2 p-2 d-flex flex-column price">
                  <label for="inputState">Budget Range in &#8377;</label>
                  <input
                    id="inputState"
                    className="form-control"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPrice(!showPrice)}
                    onMouseLeave={() => setShowPrice(false)}
                    value={`Min- ${minVal} | Max- ${
                      minVal > maxVal ? minVal : maxVal
                    }`}
                    readOnly
                  />
                  <div
                    className={
                      showPrice
                        ? "d-block onHoverPriceDropDown"
                        : "d-none onHoverPriceDropDown"
                    }
                  >
                    <ul className="list-group">
                      <li className="list-group-item ">
                        <p className="w-30">Min &#8377; {minVal}</p>

                        <input
                          className="w-70 slider"
                          type="range"
                          onChange={handleMinPriceChange}
                          defaultValue="0"
                        />
                      </li>
                      <li className="list-group-item ">
                        <p className="w-30">
                          Max &#8377; {maxVal < minVal ? minVal : maxVal}
                        </p>
                        <input
                          className="w-70 slider"
                          type="range"
                          onChange={handleMaxPriceChange}
                          defaultValue="0"
                          value={
                            minVal >= maxVal
                              ? minVal / 1000 + ""
                              : maxVal / 1000 + ""
                          }
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="filterPage__content__eventsCards">
            {filteredCompaniesAlgo().map((company) => {
              return (
                <Cards
                  key={company.id}
                  showModal={showModal}
                  company={company}
                />
              );
            })}
            {filteredCompaniesAlgo().length === 0 ? (
              <NotFound firstTime={State === "" && Event === ""} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
