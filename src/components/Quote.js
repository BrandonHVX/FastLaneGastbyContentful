import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <section
        id="requestQuoteTabs"
        class="request-quote request-quote-tabs p-60 "
      >
        <div class="container">
          <div class="row heading heading-2 ">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <span class="heading__subtitle">Real Solutions, Real Fast!</span>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <h1 class="heading__title">Request a Quote</h1>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 ">
              <p class="heading__desc">
                Our global logistics expertise, advanced supply chain technology
                & customized logistics solutions will help you analyze, develop
                and implement successful supply chain management strategies.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="request__form">
                <nav class="nav nav-tabs">
                  <a class="nav__link active" data-toggle="tab" href="#quote">
                    Request A Quote
                  </a>
                  <a class="nav__link" data-toggle="tab" href="#track">
                    Track & Trace
                  </a>
                </nav>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="quote">
                    <div class="request-quote-panel">
                      <div class="request__form-body">
                        <div class="row">
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <h6>Personal Data</h6>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <h6 class="mt-5">Shipment Data</h6>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group form-group-select">
                              <select class="form-control">
                                <option>Freight Type</option>
                                <option>Freight Type 1</option>
                                <option>Freight Type 2</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="City of Departure"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Delivery City"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Pickup Date"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Delivery Date"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="form-group form-group-select">
                              <select class="form-control">
                                <option>Commodity</option>
                                <option>Commodity</option>
                                <option>Commodity</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4 d-flex">
                            <div class="form-group mr-20">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Weight"
                              />
                            </div>
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Height"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4 col-lg-4  d-flex">
                            <div class="form-group mr-20">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Width"
                              />
                            </div>
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Length"
                              />
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Special Comments"
                              />
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <button class="btn btn__secondary btn__block">
                              Request A Quote
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="widget widget-download bg-theme">
                        <div class="widget__content">
                          <h5>
                            Industry
                            <br />
                            Solutions!
                          </h5>
                          <p>
                            Our worldwide presence ensures the timeliness, cost
                            efficiency and compliance adherence required to
                            ensure your production timelines are met.
                          </p>
                          <a
                            href="#"
                            class="btn btn__secondary btn__hover2 btn__block"
                          >
                            <span>Download 2019 Brochure</span>
                            <i class="icon-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="track">
                    <div class="request-quote-panel">
                      <div class="request__form-body">
                        <div class="row">
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="form-group">
                              <label>Shipment Type</label>
                              <div class="form-group form-group-select">
                                <select class="form-control">
                                  <option>Packaging</option>
                                  <option>Packaging 1</option>
                                  <option>Packaging 2</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="form-group">
                              <label>Tracking Number</label>
                              <div class="form-group">
                                <textarea
                                  class="form-control"
                                  placeholder="You can enter up to a maximum of 10 airway bill numbers for tracking."
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap">
                            <div class="form-group input-radio">
                              <label class="label-radio">
                                Fragile
                                <input
                                  type="radio"
                                  name="radioGroup2"
                                  checked=""
                                />
                                <span class="radio-indicator"></span>
                              </label>
                            </div>
                            <div class="form-group input-radio">
                              <label class="label-radio">
                                Express Delivery
                                <input type="radio" name="radioGroup2" />
                                <span class="radio-indicator"></span>
                              </label>
                            </div>
                            <div class="form-group input-radio">
                              <label class="label-radio">
                                Insurance
                                <input type="radio" name="radioGroup2" />
                                <span class="radio-indicator"></span>
                              </label>
                            </div>
                            <div class="form-group input-radio">
                              <label class="label-radio">
                                Packaging
                                <input type="radio" name="radioGroup2" />
                                <span class="radio-indicator"></span>
                              </label>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <button class="btn btn__secondary btn__block">
                              Track & Trace
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="widget widget-download bg-theme">
                        <div class="widget__content">
                          <h5>
                            Industry
                            <br />
                            Solutions!
                          </h5>
                          <p>
                            Our worldwide presence ensures the timeliness, cost
                            efficiency and compliance adherence required to
                            ensure your production timelines are met.
                          </p>
                          <a
                            href="#"
                            class="btn btn__secondary btn__hover2 btn__block"
                          >
                            <span>Download 2019 Brochure</span>
                            <i class="icon-arrow-right"></i>
                          </a>
                        </div>
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
}
