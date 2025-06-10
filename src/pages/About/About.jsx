import "./about.style.css";

const About = () => {
  const items = [
    {
      image: "",
      title: "Here is a pokok",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque porro repellendus, delectus pariatur, deserunt illo maiores odit consequatur.",
    },
    {
      image: "",
      title: "Here's a heart",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex quaerat deleniti quasi explicabo qui. Ratione assumenda quisquam ullam aut magnam, officiis.",
    },
    {
      image: "",
      title: "Waterfall maybe?",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sed harum odio ipsa, aliquid architecto sunt ullam veniam commodi eaque veritatis nisi ab explicabo.",
    },
  ];
  return (
    <div className="about-page">
      <div className="main-text-holder">
        <h1 className="about-heading">About</h1>
        <p className="about-text">Welcome on about page</p>
      </div>
      <div className="about-cart-holder">
        {items.map((item) => (
          <div className="cart">
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
