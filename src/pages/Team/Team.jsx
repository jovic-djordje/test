import { Link } from "react-router-dom";
import "./team.style.css";

const Team = () => {
  const members = [
    {
      image:
        "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg",
      fullName: "Alex Smith",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum quae voluptatem quo perspiciatis ad harum nesciunt, incidunt possimus voluptates asperiores optio et, hic ",
      role: "Creative Leader",
      fbLink: "https://www.facebook.com/",
      instaLink: "https://www.instagram.com/",
      xLink: "https://x.com/",
    },

    {
      image:
        "https://th.bing.com/th/id/OIP.u7iTw58RaTGV2Qwm4gb8GAHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1",
      fullName: "May Brown",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum quae voluptatem quo perspiciatis ad harum nesciunt, incidunt possimus voluptates asperiores optio et, hic",
      role: "Sales Manager",
      fbLink: "https://www.facebook.com/",
      instaLink: "https://www.instagram.com/",
      xLink: "https://x.com/",
    },

    {
      image:
        "https://th.bing.com/th/id/OIP.k1tW2jGh6fKBsHHDTw5nMgHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1",
      fullName: "Ann Richmond",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum quae voluptatem quo perspiciatis ad harum nesciunt, incidunt possimus voluptates asperiores optio et, hic",
      role: "Web Developer",
      fbLink: "https://www.facebook.com/",
      instaLink: "https://www.instagram.com/",
      xLink: "https://x.com/",
    },

    {
      image:
        "https://th.bing.com/th/id/OIP.uTz350EhgYuvrhbGE174pgAAAA?r=0&pid=ImgDet&w=474&h=316&rs=1",
      fullName: "Max Swanson",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum quae voluptatem quo perspiciatis ad harum nesciunt, incidunt possimus voluptates asperiores optio et, hic",
      role: "Web Designer",
      fbLink: "https://www.facebook.com/",
      instaLink: "https://www.instagram.com/",
      xLink: "https://x.com/",
    },
  ];
  return (
    <div className="team-page">
      <h1 className="team-page-heading">Meet our team</h1>
      <div className="team-cart-holder">
        {members.map((member) => (
          <div className="team-cart">
            <div className="team-cart-width-holder">
              <img
                src={member.image}
                alt="profile photo"
                className="profile-pic"
              />
              <h4 className="name">{member.fullName}</h4>
              <p className="description">{member.description}</p>
              <p className="role">{member.role}</p>
              <div className="icons-holder">
                <Link to={member.fbLink}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
                    alt="facebook"
                    className="icon"
                  />
                </Link>
                <Link to={member.instaLink}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/018/930/413/large_2x/instagram-logo-instagram-icon-transparent-free-png.png"
                    alt="instagram"
                    className="icon"
                  />
                </Link>
                <Link to={member.xLink}>
                  <img
                    src="https://th.bing.com/th/id/R.3d74e8bfd4ef7985f7529bb9f7650eca?rik=RCvdo0dDvjxCWg&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f580b57fcd9996e24bc43c53e.png&ehk=%2fkYf7%2bIY6TUkpUQzwclpivMLQ8ynEgcZYehDGOzbu0E%3d&risl=&pid=ImgRaw&r=0"
                    alt="twitter"
                    className="icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
