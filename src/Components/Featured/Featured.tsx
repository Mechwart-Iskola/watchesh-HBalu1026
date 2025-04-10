
import './featured.css';
import FeatureCard from './featuredCard/FeatureCard';
import { useEffect, useState } from 'react';

const Featured = () => {
  const [featuredWatches, setFeaturedWatches] = useState([]);

  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        const response = await fetch('/path/to/featured.json');
        if (!response.ok) {
          throw new Error('Failed to fetch featured data');
        }
        const data = await response.json();
        setFeaturedWatches(data);
      } catch (error) {
        console.error('Error fetching featured data:', error);
      }
    };

    fetchFeaturedData();
  }, []);

  return (
    <section className="featured" id="featured">
      <h2 className="feature__title">Featured</h2>
      <div className="featured__container">
        {featuredWatches.map((watch, index) => (
          <FeatureCard key={index} {...watch} />
        ))}
      </div>
    </section>
  );
};

export default Featured;