import { tours } from "../data";
import Title from "./Title";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((data) => {
          return (
            <article className="tour-card" key={data.id}>
              <div className="tour-img-container">
                <img src={data.imgSrc} className="tour-img" alt="" />
                <p className="tour-date">{data.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{data.title}</h4>
                </div>
                <p>{data.description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {data.country}
                  </p>
                  <p>{data.days}</p>
                  <p>from ${data.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
