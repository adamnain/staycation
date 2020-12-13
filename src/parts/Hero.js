import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      <div class="row align-items-center">
        <div class="col-auto pr-5" style={{ width: 560 }}>
          {" "}
          <h1 class="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work <br />
            Start Next Vacation
          </h1>
          <p class="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5 "
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div class="row mt-5">
            <div class="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={"${props.data.travelers} Travelers"}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span class="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>
            <div class="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={"${props.data.treasures} Treasures"}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span class="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>

            <div class="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={"${props.data.cities} Cities"}
              />
              <h6 class="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span class="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>
          </div>
        </div>

        <div class="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="Room with couches"
              class="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHero_}
              alt="Room with couches Frame"
              class="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
