import "./intro.css";
import "animate.css";

function Intro(props: any) {
  return (
    <div className="top">
      <h1 className="animate__animated animate__slideInDown">Nwobodo Ikenna</h1>
      <p className="animate__animated animate__fadeIn">
        I am a versatile professional with expertise in frontend development,
        UI/UX design, graphic design, and backend development. With a strong
        foundation in modern web technologies I create responsive and
        interactive websites that prioritize user experience. Combining my eye
        for aesthetics and understanding of branding principles, I also design
        visually captivating user interfaces, logos, marketing materials, and
        social media graphics. Additionally, I have a solid understanding of
        backend development and proficiently working with databases and API
        integration.
        <p>
          Main Stack: <code>Express.js</code> <code>Node.js</code>{" "}
          <code>React</code>
        </p>
      </p>
    </div>
  );
}

export default Intro;
