import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import get from "lodash/get";

import Layout from "../../components/Layout";

export default class ExpeditedDelivery extends Component {
  render() {
    const imageData = get(this, "props.data.background.childImageSharp.fluid");
    return (
      <Layout>
        <BackgroundImage
          Tag="section"
          className={`bg-img bg-overlay-1 page-title bg-parallax`}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <section id="page-title" class="">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <h1 class="pagetitle__heading">Expedited Delivery</h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="services.html">services</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Warehousing
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </BackgroundImage>

        <section id="textContentSection" class="text-content-section pb-40">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-4">
                <aside class="sidebar mb-30">
                  <div class="widget widget-categories">
                    <h5 class="widget__title">Transport Services</h5>
                    <div class="widget-content">
                      <ul class="list-unstyled">
                        <li>
                          <Link
                            to="/transportation/expedited_delivery"
                            activeClassName="active"
                            partiallyActive={true}
                          >
                            Expedited Delivery
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/transportation/final_mile"
                            activeClassName="active"
                          >
                            Final Mile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/transportation/long_haul"
                            activeClassName="active"
                          >
                            Long Haul
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="widget widget-help bg-overlay bg-overlay-grdient-secondary">
                    <div class="bg-img">
                      <img src="assets/images/sidebar/1.jpg" alt="background" />
                    </div>
                    <div class="widget__content">
                      <h5>
                        How Can <br /> We Help You!
                      </h5>
                      <p>
                        We understand the importance approaching each work
                        integrally and believe in the power of simple and easy
                        communication.
                      </p>
                      <a
                        href="#"
                        class="btn btn__primary btn__hover2 btn__block"
                      >
                        Schedule An Appointment
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-8">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="text__block mb-40">
                      <h5 class="text__block-title">Overview</h5>
                      <p class="text__block-desc">
                        Our airfreight staff attaches great importance to
                        customizing the booking process for our customers.
                      </p>
                    </div>

                    <div class="text__block">
                      <h5 class="text__block-title">How It Works?!</h5>
                      <p class="text__block-desc"></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="text__block">
                      <h5 class="text__block-title">Why Us!</h5>
                      <p class="text__block-desc">
                        We continue to pursue that same vision in today's
                        complex, uncertain world, working every day to earn our
                        customers’ trust! During that time, we’ve become expert
                        in freight transportation by air and all its related
                        services. We work closely with all major airlines around
                        the world.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row fancybox-layout2 mb-50">
                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-wallet"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Transparent Pricing</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-search"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Real-Time Tracking</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-trolley"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Warehouse Storage</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-package-6"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Security For Cargo</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-payment-method"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Easy Payment Methods</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-call-center"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">24/7 Hours Support</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <h5>Key Benifits</h5>
                    <div id="accordion" class="mb-70">
                      <div class="accordion-item">
                        <div
                          class="accordion__item-header"
                          data-toggle="collapse"
                          data-target="#collapse1"
                        >
                          <a class="accordion__item-title" href="#">
                            Which Plan Is Right For Me?
                          </a>
                        </div>
                        <div
                          id="collapse1"
                          class="collapse"
                          data-parent="#accordion"
                        >
                          <div class="accordion__item-body">
                            <p>
                              Fully responsive, retina ready & created for all
                              types of devices. York makes sure your website
                              looks equally breathtaking when viewed on all
                              screen resolutions.Fully responsive, retina ready
                              & created for all types of devices. York makes
                              sure your website looks equally breathtaking when
                              viewed on all screen resolutions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div
                          class="accordion__item-header"
                          data-toggle="collapse"
                          data-target="#collapse2"
                        >
                          <a class="accordion__item-title" href="#">
                            Do I have to commit to a contract?
                          </a>
                        </div>
                        <div
                          id="collapse2"
                          class="collapse"
                          data-parent="#accordion"
                        >
                          <div class="accordion__item-body">
                            <p>
                              Fully responsive, retina ready & created for all
                              types of devices. York makes sure your website
                              looks equally breathtaking when viewed on all
                              screen resolutions.Fully responsive, retina ready
                              & created for all types of devices. York makes
                              sure your website looks equally breathtaking when
                              viewed on all screen resolutions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div
                          class="accordion__item-header opened"
                          data-toggle="collapse"
                          data-target="#collapse3"
                        >
                          <a class="accordion__item-title" href="#">
                            What Payment Methods Are Available?
                          </a>
                        </div>
                        <div
                          id="collapse3"
                          class="collapse show"
                          data-parent="#accordion"
                        >
                          <div class="accordion__item-body">
                            <p>
                              Fully responsive, retina ready & created for all
                              types of devices. York makes sure your website
                              looks equally breathtaking when viewed on all
                              screen resolutions.Fully responsive, retina ready
                              & created for all types of devices. York makes
                              sure your website looks equally breathtaking when
                              viewed on all screen resolutions.
                            </p>
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
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    background: file(relativePath: { eq: "backgrounds/fast-haul-4.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
