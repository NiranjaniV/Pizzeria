import React from "react";
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Niran Pizzeria, where we serve up the tastiest and freshest
          pizzas in town! Our mission is to provide our customers with the
          ultimate pizza experience, from the moment they walk through our door
          to the moment they take their first bite. We start with only the
          finest and highest quality ingredients, sourced from local suppliers
          whenever possible. Our dough is made fresh daily, and our sauces are
          simmered to perfection. Whether you're a fan of classic Margherita,
          spicy pepperoni, or something more adventurous, we have something for
          everyone on our menu. Our team is passionate about pizza and dedicated
          to delivering excellent service with a smile. From the oven to the
          table, every step of the process is focused on ensuring that our
          customers have the best possible experience. So come on in, grab a
          slice, and taste the difference that quality ingredients, passion, and
          dedication can make. We look forward to serving you soon!{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
