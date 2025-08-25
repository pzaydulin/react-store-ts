import { useDocumentTitle } from "@app/shared/hooks/useDocumentTitle";
import React from "react";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  useDocumentTitle("Home");
  return (
    <>
      <section
        id="home"
        className="flex flex-col gap-6 items-center lg:flex-row  min-h-[calc(100vh-200px)] justify-center p-4"
      >
        <div className="flex-basis-1/2">
          <h1 className="text-primary text-2xl mb-6 font-semibold leading-none tracking-tight">
            Welcome to Fake Store
          </h1>
          <p>
            <strong>Fake Store</strong> is a demo e-commerce application built
            with <strong>ReactJS</strong>, showcasing a modern front-end
            architecture and dynamic data integration.
          </p>
          <p>
            Powered by the{" "}
            <a
              className="font-semibold hover:underline "
              href="https://fakestoreapi.com/"
            >
              Fake Store API
            </a>
            , this project simulates a realistic shopping experience using live
            product data — including categories, prices, descriptions, and
            images — without the need for a backend setup.
          </p>
          <p>
            Explore the store, inspect the code, and see how real-world UI logic
            comes together — all in one place.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 mb-6">
            <button className="px-6 py-2 rounded-lg  bg-primary text-primary_foreground hover:bg-primary/80 active:bg-primary">
              <NavLink to="/products">Browse Products</NavLink>
            </button>
            <button className="px-6 py-2 rounded-lg bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 ">
              <NavLink to="https://github.com/pzaydulin/react-store-ts">
                View on Github
              </NavLink>
            </button>
          </div>
        </div>
        <div className="lg:max-w-[50%] flex-basis-1/2">
          <img src="/intro.svg" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
