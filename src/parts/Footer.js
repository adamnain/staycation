import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col">
            <IconText />
            <p class="brand-tagline">
              Me kaboom your beauty holiday instanly and memorable.
            </p>
          </div>
          <div class="col-2 mr-5">
            <h6 class="mt-2">For Beginners</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking Room
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div class="col-2 mr-5">
            <h6 class="mt-2">Explore Us</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/terms">
                  Terms Conditions
                </Button>
              </li>
            </ul>
          </div>

          <div class="col-2 mr-5">
            <h6 class="mt-2">Connect Us</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li class="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                  021-2208-1996
                </Button>
              </li>
              <li class="list-group-item">
                <span>Staycation, Bandung Indonesia.</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col text-center copyrights">
            Copyright 2021 - All Right Seserved - Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
