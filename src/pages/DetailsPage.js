import React, { Component } from "react";
import PageDetailTitle from "parts/PageDetailTitle";
import Header from "parts/Header";
import ItemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";

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
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>

        <section className="container">
          <div class="row">
            <div class="col-7 pr-5">
              <PageDetailDescription data={ItemDetails}></PageDetailDescription>
            </div>
            <div class="col-5">Booking Form</div>
          </div>
        </section>
      </>
    );
  }
}
