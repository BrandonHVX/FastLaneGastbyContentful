import React, { Component } from "react";
import Layout from "../../components/Layout";

export default class About extends Component {
  render() {
    return (
      <Layout>
        <section
          id="page-title"
          class="page-title page-title-layout4 text-center bg-overlay bg-parallax"
        >
          <div class="bg-img">
            <img src="assets/images/page-titles/1.jpg" alt="background" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                <span class="pagetitle__subheading">
                  Affordable Price, Certified Forwarders
                </span>
                <h1 class="pagetitle__heading">
                  Advanced Supply Chain Technology & Customized Logistics
                  Solutions!
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section id="about2" class="about about-2">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading heading-3 mb-20 pt-60">
                  <span class="heading__subtitle">
                    Supply Chain Technology & Customized Solutions.
                  </span>
                  <h2 class="heading__title">
                    Competitive Advantages For Largest Companies!
                  </h2>
                  <p>
                    Providing the best transport and shipping services available
                    allover the world. Our skilled personnel, utilising the
                    latest communications, tracking and processing software,
                    combined with decades of experience.
                  </p>
                </div>
                <ul class="list-items list-items-layout2 list-unstyled mb-30">
                  <li>Transparent Pricing, Environmental Sensitivity</li>
                  <li>24/7 Hours Support, Professional and Qualified</li>
                  <li>Real Time Tracking, Fast & Efficient Delivery</li>
                  <li>Warehouse Storage, Personalised solutions</li>
                </ul>
                <a href="#" class="btn btn__primary mr-30 mb-20">
                  More About Us
                </a>
                <a
                  href="#"
                  class="btn btn__secondary btn__link btn__underlined mb-20"
                >
                  Find your solution
                </a>
              </div>
              <div class="col-sm-12 col-md-9 col-lg-6">
                <div class="about__img">
                  <img
                    src="assets/images/about/1.jpg"
                    alt="about img"
                    class="img-fluid"
                  />
                  <div class="counter-item-wrapper counters-white">
                    <div class="counter-item">
                      <div class="counter__icon">
                        <i class="icon-box"></i>
                      </div>
                      <h4>
                        <span class="counter">6,1541</span>
                      </h4>
                      <p class="counter__desc">Delivered Goods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="banner3" class="banner banner-3 p-0 bg-theme">
          <div class="container-fluid col-padding-0">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6 background-banner bg-overlay">
                <div class="bg-img">
                  <img src="assets/images/banners/7.jpg" alt="background" />
                </div>
                <div class="video__btn video__btn-white video__btn-right-center">
                  <a
                    class="popup-video"
                    href="https://www.youtube.com/watch?4=&v=TKnufs85hXk"
                  >
                    <span class="video__player-animation"></span>
                    <span class="video__player-animation video__player-animation-2"></span>
                    <div class="video__player">
                      <i class="fa fa-play"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="inner-padding">
                  <div class="heading heading-3 heading-white mb-50">
                    <h2 class="heading__title">
                      Flexible Pricing Policy <br />& Decades Of Experience!
                    </h2>
                    <p class="heading__desc">
                      We believe that the services, offered by our company,
                      should satisfy the high expectations of our customers. We
                      are dedicated in creating added value for our customers by
                      implementing modern technology in our work. That is why
                      the desire of constant improvement is the driving force
                      behind our transportation business.
                    </p>
                  </div>
                  <div class="counters-white d-flex flex-wrap justify-content-between">
                    <div class="counter-item">
                      <h4>
                        <span class="counter">3,214</span>
                        <span>m</span>
                      </h4>
                      <p class="counter__desc">Clients Worldwide</p>
                    </div>
                    <div class="counter-item">
                      <h4>
                        <span class="counter">5,154</span>
                        <span>m</span>
                      </h4>
                      <p class="counter__desc">Delivered Goods</p>
                    </div>
                    <div class="counter-item">
                      <h4>
                        <span class="counter">8,845</span>
                        <span>m</span>
                      </h4>
                      <p class="counter__desc">Miles Driven</p>
                    </div>
                  </div>
                  <p class="color-white mb-20">
                    Providing the best transport and shipping services currently
                    available allover the world. Our skilled personnel,
                    utilising the latest communications, new tracking and
                    processing software, combined with decades of experience!
                  </p>
                  <img
                    src="assets/images/about/singnture2.png"
                    alt="singnture"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projectsCarousel" class="projects-carousel">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div class="heading text-center mb-50">
                  <span class="heading__subtitle">Latest Case Studies</span>
                  <h2 class="heading__title">Featured Projects</h2>
                  <p class="heading__desc">
                    We presents the following case studies that exemplify the
                    type of solutions and services we are providing across our
                    customer base.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div
                  class="carousel owl-carousel carousel-dots"
                  data-slide="3"
                  data-slide-md="2"
                  data-slide-sm="1"
                  data-autoplay="true"
                  data-nav="false"
                  data-dots="true"
                  data-space="30"
                  data-loop="true"
                  data-speed="800"
                >
                  <div class="project-item">
                    <div class="project__img">
                      <img
                        src="assets/images/case-studies/grid/1.jpg"
                        alt="project img"
                      />
                      <div class="project__cat">
                        <a href="#">Analystics</a>
                        <a href="#">Optimization</a>
                      </div>
                    </div>
                    <div class="project__content">
                      <h4 class="project__title">
                        <a href="#">Lane Pairing Analysis</a>
                      </h4>
                      <p class="project__desc">
                        We understand that data is the greatest asset when it
                        comes to analyzing and optimizing your supply chain
                        performance.
                      </p>
                      <a href="#" class="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i class="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-item">
                    <div class="project__img">
                      <img
                        src="assets/images/case-studies/grid/2.jpg"
                        alt="project img"
                      />
                      <div class="project__cat">
                        <a href="#">Warehousing</a>
                        <a href="#">Distribution</a>
                      </div>
                    </div>
                    <div class="project__content">
                      <h4 class="project__title">
                        <a href="#">Warehouse Hand Inventory</a>
                      </h4>
                      <p class="project__desc">
                        We understand that data is the greatest asset when it
                        comes to analyzing and optimizing your supply chain
                        performance.
                      </p>
                      <a href="#" class="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i class="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-item">
                    <div class="project__img">
                      <img
                        src="assets/images/case-studies/grid/3.jpg"
                        alt="project img"
                      />
                      <div class="project__cat">
                        <a href="#">Logistics</a>
                        <a href="#">Analytics</a>
                      </div>
                    </div>
                    <div class="project__content">
                      <h4 class="project__title">
                        <a href="#">Minimize Cost Manufacturing</a>
                      </h4>
                      <p class="project__desc">
                        Cost savings is crucial, innovative technology minimizes
                        your overall spend by utilizing an extensive .
                      </p>
                      <a href="#" class="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i class="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-item">
                    <div class="project__img">
                      <img
                        src="assets/images/case-studies/grid/4.jpg"
                        alt="project img"
                      />
                      <div class="project__cat">
                        <a href="#">Optimization</a>
                        <a href="#">Warehousing</a>
                      </div>
                    </div>
                    <div class="project__content">
                      <h4 class="project__title">
                        <a href="#">Regulatory Compliance</a>
                      </h4>
                      <p class="project__desc">
                        Cost savings is crucial, innovative technology minimizes
                        your overall spend by utilizing an extensive .
                      </p>
                      <a href="#" class="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i class="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" class="clients clients-1 border-top">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div
                  class="carousel owl-carousel"
                  data-slide="6"
                  data-slide-md="4"
                  data-slide-sm="2"
                  data-autoplay="true"
                  data-nav="false"
                  data-dots="false"
                  data-space="20"
                  data-loop="true"
                  data-speed="700"
                >
                  <div class="client">
                    <a href="#">
                      <img src="assets/images/clients/9.png" alt="client" />
                    </a>
                  </div>
                  <div class="client">
                    <a href="#">
                      <img src="assets/images/clients/10.png" alt="client" />
                    </a>
                  </div>
                  <div class="client">
                    <a href="#">
                      <img src="assets/images/clients/11.png" alt="client" />
                    </a>
                  </div>
                  <div class="client">
                    <a href="#">
                      <img src="assets/images/clients/12.png" alt="client" />
                    </a>
                  </div>
                  <div class="client">
                    <a href="#">
                      <img src="assets/images/clients/13.png" alt="client" />
                    </a>
                  </div>
                  <div class="client">
                    <a href="#">
                      <img src="assets/images/clients/11.png" alt="client" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonial2"
          class="testimonial testimonial-2 text-center bg-overlay bg-overlay-grdient-theme pb-90"
        >
          <div class="bg-img">
            <img src="assets/images/backgrounds/7.jpg" alt="background" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div class="heading  heading-white mb-30">
                  <span class="heading__subtitle color-heading">
                    What Peoples Say!
                  </span>
                  <h2 class="heading__title">Testimonials</h2>
                  <p class="heading__desc">
                    See what our customers have to say about our products,
                    people and services. We are very proud of you all !
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div
                  class="carousel owl-carousel carousel-dots carousel-dots-white"
                  data-slide="3"
                  data-slide-md="2"
                  data-slide-sm="1"
                  data-autoplay="true"
                  data-nav="false"
                  data-dots="true"
                  data-space="30"
                  data-loop="true"
                  data-speed="800"
                >
                  <div class=" testimonial-item">
                    <div class="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/2.jpg"
                        alt="author thumb"
                      />
                    </div>
                    <div class="testimonial__content">
                      <p class="testimonial__desc">
                        Optime Logistics International customer service is some
                        of the best we have ever had with ocean forwarders we
                        like to ship as much as possible with you all.
                      </p>
                    </div>
                    <div class="testimonial__meta">
                      <img
                        src="assets/images/testimonials/signature2.png"
                        alt="signature"
                      />
                      <p class="testimonial__meta-desc">The Move Inc</p>
                    </div>
                  </div>

                  <div class=" testimonial-item">
                    <div class="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/1.jpg"
                        alt="author thumb"
                      />
                    </div>
                    <div class="testimonial__content">
                      <p class="testimonial__desc">
                        Expertly trained members who take the step to fulfill
                        dedicated promise to deliver innovative and solutions to
                        customers to fit the needs of a changing world.
                      </p>
                    </div>
                    <div class="testimonial__meta">
                      <img
                        src="assets/images/testimonials/signature.png"
                        alt="signature"
                      />
                      <p class="testimonial__meta-desc">The Move Inc</p>
                    </div>
                  </div>

                  <div class=" testimonial-item">
                    <div class="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/3.jpg"
                        alt="author thumb"
                      />
                    </div>
                    <div class="testimonial__content">
                      <p class="testimonial__desc">
                        In my career, I’ve seen great companies serving
                        logistics. But not to the point where you feel that
                        comfort and trust that we get with Optime Company.
                      </p>
                    </div>
                    <div class="testimonial__meta">
                      <img
                        src="assets/images/testimonials/signature3.png"
                        alt="signature"
                      />
                      <p class="testimonial__meta-desc">The Move Inc</p>
                    </div>
                  </div>

                  <div class=" testimonial-item">
                    <div class="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/1.jpg"
                        alt="author thumb"
                      />
                    </div>
                    <div class="testimonial__content">
                      <p class="testimonial__desc">
                        Expertly trained members who take the step to fulfill
                        dedicated promise to deliver innovative and solutions to
                        customers to fit the needs of a changing world.
                      </p>
                    </div>
                    <div class="testimonial__meta">
                      <img
                        src="assets/images/testimonials/signature.png"
                        alt="signature"
                      />
                      <p class="testimonial__meta-desc">The Move Inc</p>
                    </div>
                  </div>

                  <div class=" testimonial-item">
                    <div class="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/1.jpg"
                        alt="author thumb"
                      />
                    </div>
                    <div class="testimonial__content">
                      <p class="testimonial__desc">
                        Expertly trained members who take the step to fulfill
                        dedicated promise to deliver innovative and solutions to
                        customers to fit the needs of a changing world.
                      </p>
                    </div>
                    <div class="testimonial__meta">
                      <img
                        src="assets/images/testimonials/signature.png"
                        alt="signature"
                      />
                      <p class="testimonial__meta-desc">The Move Inc</p>
                    </div>
                  </div>

                  <div class=" testimonial-item">
                    <div class="testimonial__thumb">
                      <img
                        src="assets/images/testimonials/thumbs/3.jpg"
                        alt="author thumb"
                      />
                    </div>
                    <div class="testimonial__content">
                      <p class="testimonial__desc">
                        In my career, I’ve seen great companies serving
                        logistics. But not to the point where you feel that
                        comfort and trust that we get with Optime Company.
                      </p>
                    </div>
                    <div class="testimonial__meta">
                      <img
                        src="assets/images/testimonials/signature3.png"
                        alt="signature"
                      />
                      <p class="testimonial__meta-desc">The Move Inc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blogGrid" class="blog blog-grid pb-60">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div class="heading text-center mb-50">
                  <span class="heading__subtitle">Insight and Trends</span>
                  <h2 class="heading__title">Recent Articles</h2>
                  <p class="heading__desc">
                    Follow our latest news and thoughts which focuses
                    exclusively on insight, industry trends, top news headlines.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="blog-item">
                  <div class="blog__img">
                    <a href="#">
                      <img
                        src="assets/images/blog/grid/1.jpg"
                        alt="blog image"
                      />
                    </a>
                  </div>
                  <div class="blog__content">
                    <div class="blog__meta">
                      <div class="blog__meta-cat">
                        <a href="#">Insights</a>
                        <a href="#">Management</a>
                      </div>
                    </div>
                    <h4 class="blog__title">
                      <a href="#">
                        Importers achieve cost savings through the First Sale
                        rule!
                      </a>
                    </h4>
                    <span class="blog__meta-date">Jan 20, 2019</span>
                    <p class="blog__desc">
                      The trade war currently ensuing between the US and several
                      nations around the globe, most fiercely with China, shows
                      no signs of the first set of tariffs levied against
                      solar...
                    </p>
                    <a href="#" class="btn btn__secondary btn__link">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="blog-item">
                  <div class="blog__img">
                    <a href="#">
                      <img
                        src="assets/images/blog/grid/2.jpg"
                        alt="blog image"
                      />
                    </a>
                  </div>
                  <div class="blog__content">
                    <div class="blog__meta">
                      <div class="blog__meta-cat">
                        <a href="#">Warehousing</a>
                        <a href="#">Industry</a>
                      </div>
                    </div>
                    <h4 class="blog__title">
                      <a href="#">
                        Cargo flow through better supply chain visibility,
                        control.
                      </a>
                    </h4>
                    <span class="blog__meta-date">Oct 18, 2019</span>
                    <p class="blog__desc">
                      Global provider connected products for consumers, and
                      enterprises worldwide, supply chain control is everything,
                      provide visibility and traceability needed for...
                    </p>
                    <a href="#" class="btn btn__secondary btn__link">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="blog-item">
                  <div class="blog__img">
                    <a href="#">
                      <img
                        src="assets/images/blog/grid/3.jpg"
                        alt="blog image"
                      />
                    </a>
                  </div>
                  <div class="blog__content">
                    <div class="blog__meta">
                      <div class="blog__meta-cat">
                        <a href="#">Logistics</a>
                        <a href="#">Distribution</a>
                      </div>
                    </div>
                    <h4 class="blog__title">
                      <a href="#">
                        Importance of specialized focus in Projects, Oil & Gas
                        Logistics?
                      </a>
                    </h4>
                    <span class="blog__meta-date">Jan 20, 2019</span>
                    <p class="blog__desc">
                      Our team provides highly skilled & experienced project
                      managers who know the intricacies of this vertical and
                      focus on providing innovative solutions in Oil & Gas
                      sector...
                    </p>
                    <a href="#" class="btn btn__secondary btn__link">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
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
