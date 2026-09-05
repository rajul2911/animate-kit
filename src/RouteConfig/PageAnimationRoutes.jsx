import React from "react";
import { Route, Routes } from "react-router-dom";
import PageAnimation from "../pages/PageAnimation";
import PageAnimationOne from "../components/PageAnimationOne/PageAnimationOne";
import PageAnimationTwo from "../components/PageAnimationTwo/PageAnimationTwo";
import PageAnimationTHree from "../components/PageAnimationThree/PageAnimationTHree";

const PageAnimationRoutes = () => {
  return (
    <Routes>
      {/* /page-animation */}
      <Route index element={<PageAnimation />} />

      <Route path="page-animation-one" element={<PageAnimationOne />}>
        <Route index element={<HomeOne />} />

        <Route path="about-one" element={<AboutOne />} />

        <Route path="contact-one" element={<ContactOne />} />
      </Route>

      <Route path="page-animation-two" element={<PageAnimationTwo />}>
        <Route index element={<HomeOne />} />

        <Route path="about-two" element={<AboutOne />} />

        <Route path="contact-two" element={<ContactOne />} />
      </Route>

      <Route path="page-animation-three" element={<PageAnimationTHree />}>
        <Route index element={<HomeOne />} />

        <Route path="about-three" element={<AboutOne />} />

        <Route path="contact-three" element={<ContactOne />} />
      </Route>
    </Routes>
  );
};

export default PageAnimationRoutes;

const HomeOne = () => {
  return (
    <section className="min-h-screen bg-[#B0AD98] p-10">
      <h1 className="text-5xl font-black">Home</h1>

      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          imperdiet nibh sit amet velit dignissim.
        </p>

        <p>
          Quisque molestie ullamcorper elementum. Sed sodales erat augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
};

const AboutOne = () => {
  return (
    <section className="min-h-screen bg-[#9BA7B0] p-10">
      <h1 className="text-5xl font-black">About</h1>

      <div className="mt-10 max-w-3xl text-lg leading-8">
        <p>This is the About page.</p>
      </div>
    </section>
  );
};

const ContactOne = () => {
  return (
    <section className="min-h-screen bg-[#A6B89A] p-10">
      <h1 className="text-5xl font-black">Contact</h1>

      <div className="mt-10 max-w-3xl text-lg leading-8">
        <p>This is the Contact page.</p>
      </div>
    </section>
  );
};
