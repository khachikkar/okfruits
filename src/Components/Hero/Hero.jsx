import "./Hero.css";
import logo from "../../logo.svg"

export default function Hero() {
  return (
    <section className=" paddings h-part">
      <h1>OKFruits.am</h1>
      <img src={logo} alt="" />
      <h3>Soon</h3>
    </section>
  );
}
