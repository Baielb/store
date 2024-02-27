import React from "react";

const Main = () => {
  return (
    <section className="container mx-auto">
      <div className="flex gap-20 mt-20">
        <div>
          <h2 className="text-8xl font-bold mt-14">Platzi Fake Store API</h2>
          <p className="text-2xl mt-5">
            Your API for your e-commerce or shopping website prototype.
          </p>
          <button
            style={{
                display: 'flex',
                gap: '10px',
              color: "#fff",
              padding: "13px",
              paddingRight: "30px",
              paddingLeft: "30px",
              borderRadius: "50px",
            }}
            className=" bg-sky-500  hover:bg-sky-700 mt-5"
          >
            View Docs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div>
          <img
            src="https://fakeapi.platzi.com/_astro/banner.5e0ee8a6_JMozV.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
