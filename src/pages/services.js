import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout.js";

const services = [
  {
    title: "Expedited Delivery",
    text:
      "We provides with the main types of basic conditions International sea transportation is implemented by our partners vessels the largest ocean carriers.",
    icon: "icon-courier",
    link: "/services/expedited_delivery"
  },
  {
    title: "Final Mile",
    text:
      "We provides with the main types of basic conditions International sea transportation is implemented by our partners vessels the largest ocean carriers.",
    icon: "icon-delivery-truck-2",
    link: "/services/final_mile"
  },
  {
    title: "Long Haul",
    text:
      "We provides with the main types of basic conditions International sea transportation is implemented by our partners vessels the largest ocean carriers.",
    icon: "icon-truck",
    link: "/services/long_haul"
  }
];

export default class Services extends Component {
  render() {
    return (
      <Layout>
        <section
          id="page-title"
          class="page-title page-title-layout2 bg-overlay bg-parallax"
        >
          <div class="bg-img">
            <img src="assets/images/page-titles/7.jpg" alt="background" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-8">
                <h1 class="pagetitle__heading">
                  Reliable & Express Logistic Solutions Saves Your Time!
                </h1>
                <p class="pagetitle__desc">
                  Competitive advantages to some of the largest companies
                  allover the world.
                </p>
                <a href="#" class="btn btn__white">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div id="services" class="services pb-40">
            <div class="container">
              <div class="row text-center flex-direction">
                <div class="col-sm-6 col-md-6 col-lg-4">
                  {services.map((item, i) => (
                    <div class="service-item">
                      <div class="service__icon">
                        <i class="icon-courier"></i>
                      </div>
                      <div class="service__content">
                        <h4 class="service__title">{item.title}</h4>
                        <p class="service__desc">
                          We can arrange and provides with the comprehensive
                          service in the sphere of urgent, valuable, fragile or
                          any cargoes conscientious accelerated delivery by air.
                        </p>
                        <a href="#" class="btn btn__white">
                          <span>Read More</span>
                          <i class="icon-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                  <p class="text__link mb-0">
                    Logistic & Transport Solutions Saves Your Time{" "}
                    <a href="#">Find your solution</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
