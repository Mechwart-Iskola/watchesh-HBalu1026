import './story.css';

const Story = () => {
  return (
    <section className="story">
      <div className="story__container">
        <div className="story__data">
          <h2 className="section__title story__section-title">
            Our Story
          </h2>

          <h1 className="story__title">
            Inspirational Watch of <br /> this year
          </h1>

          <p className="story__description">
            The latest and modern watches of this year, is available in various 
            presentations in this store, discover them now.
          </p>

          <a href="#" className="button button--small">Discover</a>
        </div>

        <div className="story__images">
          <img src="/img/story.png" alt="Story" className="story__img" />
          <div className="story__square"></div>
        </div>
      </div>
    </section>
  );
};

export default Story;