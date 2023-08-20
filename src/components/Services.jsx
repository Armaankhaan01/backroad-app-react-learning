import { services } from "../data";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((data) => {
          return (
            <article className="service" key={data.id}>
              <span className="service-icon">
                <i className={data.fabIcon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{data.title}</h4>
                <p className="service-text">{data.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
