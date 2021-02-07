import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <div className="mb-3">Most Picked</div>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <Fade bottom delay={500 * index}>
                <div
                  key={`mostpicked-${index}`}
                  className={`item column-4${
                    index === 0 ? " row-2" : " row-1"
                  }`}
                >
                  {" "}
                  <div className="card card-featured">
                    <div class="tag">
                      ${item.price}
                      <span class="font-weight-light">per {item.unit}</span>
                    </div>
                    <figure class="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div class="meta-wrapper">
                      <Button
                        type="link"
                        className="strached-link d-block text-white"
                        href={"/properties/${item.id}"}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
