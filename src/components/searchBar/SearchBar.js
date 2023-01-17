import React from "react";
function SearchBar() {
  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ftco-search d-flex justify-content-center">
              <div className="row">
                <div className="col-md-12 nav-link-wrap d-flex justify-content-center">
                  <div
                    className="nav nav-pills text-center"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-1-tab"
                      data-toggle="pill"
                      href="#v-pills-1"
                      role="tab"
                      aria-controls="v-pills-1"
                      aria-selected="true"
                    >
                      Buy Properties
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-2-tab"
                      data-toggle="pill"
                      href="#v-pills-2"
                      role="tab"
                      aria-controls="v-pills-2"
                      aria-selected="false"
                    >
                      Rent Properties
                    </a>
                  </div>
                </div>
                <div className="col-md-12 tab-wrap">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-1"
                      role="tabpanel"
                      aria-labelledby="v-pills-nextgen-tab"
                    >
                      <form action="#" className="search-property-1">
                        <div className="row g-0">
                          <div className="col-md d-flex">
                            <div className="form-group p-4 border-0">
                              <label htmlFor="#">Enter Keyword</label>
                              <div className="form-field">
                                <div className="icon">
                                  <span className="fa fa-search"></span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Keyword"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group p-4">
                              <label htmlFor="#">Property Type</label>
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon">
                                    <span className="fa fa-chevron-down"></span>
                                  </div>
                                  <select
                                    name=""
                                    id=""
                                    className="form-control"
                                  >
                                    <option value="">Residential</option>
                                    <option value="">Commercial</option>
                                    <option value="">Land</option>
                                    <option value="">Industrial</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group p-4">
                              <label htmlFor="#">Location</label>
                              <div className="form-field">
                                <div className="icon">
                                  <span className="ion-ios-pin"></span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search Location"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group p-4">
                              <label htmlFor="#">Price Limit</label>
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon">
                                    <span className="fa fa-chevron-down"></span>
                                  </div>
                                  <select
                                    name=""
                                    id=""
                                    className="form-control"
                                  >
                                    <option value="">$100</option>
                                    <option value="">$10,000</option>
                                    <option value="">$50,000</option>
                                    <option value="">$100,000</option>
                                    <option value="">$200,000</option>
                                    <option value="">$300,000</option>
                                    <option value="">$400,000</option>
                                    <option value="">$500,000</option>
                                    <option value="">$600,000</option>
                                    <option value="">$700,000</option>
                                    <option value="">$800,000</option>
                                    <option value="">$900,000</option>
                                    <option value="">$1,000,000</option>
                                    <option value="">$2,000,000</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group d-flex w-100 border-0">
                              <div className="form-field w-100 align-items-center d-flex">
                                <input
                                  type="submit"
                                  value="Search"
                                  className="align-self-stretch form-control btn btn-primary"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-2"
                      role="tabpanel"
                      aria-labelledby="v-pills-performance-tab"
                    >
                      <form action="#" className="search-property-1">
                        <div className="row g-0">
                          <div className="col-md d-flex">
                            <div className="form-group p-4 border-0">
                              <label htmlFor="#">Enter Keyword</label>
                              <div className="form-field">
                                <div className="icon">
                                  <span className="fa fa-search"></span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Keyword"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group p-4">
                              <label htmlFor="#">Property Type</label>
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon">
                                    <span className="fa fa-chevron-down"></span>
                                  </div>
                                  <select
                                    name=""
                                    id=""
                                    className="form-control"
                                  >
                                    <option value="">Residential</option>
                                    <option value="">Commercial</option>
                                    <option value="">Land</option>
                                    <option value="">Industrial</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group p-4">
                              <label htmlFor="#">Location</label>
                              <div className="form-field">
                                <div className="icon">
                                  <span className="ion-ios-pin"></span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search Location"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group p-4">
                              <label htmlFor="#">Price Limit</label>
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon">
                                    <span className="fa fa-chevron-down"></span>
                                  </div>
                                  <select
                                    name=""
                                    id=""
                                    className="form-control"
                                  >
                                    <option value="">$100</option>
                                    <option value="">$10,000</option>
                                    <option value="">$50,000</option>
                                    <option value="">$100,000</option>
                                    <option value="">$200,000</option>
                                    <option value="">$300,000</option>
                                    <option value="">$400,000</option>
                                    <option value="">$500,000</option>
                                    <option value="">$600,000</option>
                                    <option value="">$700,000</option>
                                    <option value="">$800,000</option>
                                    <option value="">$900,000</option>
                                    <option value="">$1,000,000</option>
                                    <option value="">$2,000,000</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group d-flex w-100 border-0">
                              <div className="form-field w-100 align-items-center d-flex">
                                <input
                                  type="submit"
                                  value="Search"
                                  className="align-self-stretch form-control btn btn-primary"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SearchBar;
