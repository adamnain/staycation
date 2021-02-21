import React, { Component } from "react";
import PageDetailTitle from "parts/PageDetailTitle";
import Header from "parts/Header";
import ItemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Detauls", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls} />

        <section className="container">
          <div class="row">
            <div class="col-7 pr-5">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div class="col-5">
              <BookingForm itemDetails={ItemDetails}></BookingForm>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
