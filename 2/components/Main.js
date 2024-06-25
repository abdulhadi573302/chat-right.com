import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <section id="home">
        <h2>Welcome to My Website</h2>
        <p>This is a simple responsive website created using React.</p>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>We are a company that specializes in web development.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us through our email: contact@example.com</p>
      </section>
    </main>
  );
};

export default Main;