import "./style.css";
import rain from "../assets/personalBlondeWoman.png";
import separator from "../assets/pngwing.com (27).png";
import dragon from "../assets/pngwing.com (41).png";

function LandingPage() {
  return (
    <div className="landing">
      <section className="parallax">
        <img src={separator} alt="" className="separator" />
        <img src={rain} alt="" className="colorRain" />
        <img src={dragon} alt="" className="dragon" />

        <h2 className="text-bold" id="text">
          WEELOG
        </h2>
      </section>

      <section className="section2">
        <h2 id="text2"></h2>
      </section>
    </div>
  );
}

export default LandingPage;
