import React from 'react'
import './HomePage.css';
import macbookImage from '../assets/macbook.png';

const HomePage = () => {
  return (
    
     <>
    <section className="homepage-section">
      <div className="content-container">
        <div className="left-column">
          <h1 className="title">The #1 Curated Online Business Marketplace</h1>
          <p className="description">
            Join thousands of customers around the globe who’ve bought and sold over $510M+ worth of online businesses.
          </p>
          <div className="button-group">
            <button className="btn get-started">Get Started for Free</button>
            <button className="btn learn-more">Learn More</button>
          </div>
          <p className="as-seen-on">As Seen On</p>
          <div class="as-seen-logo">
								<i class="newyork" data-rocket-lazy-bg-f6cc6f94-51fb-4b79-8330-6efddd8fe388="loaded"></i>
								<i class="inc" data-rocket-lazy-bg-dc406fbe-3532-4c89-991c-b40238a1ea89="loaded"></i>
								<i class="forbes" data-rocket-lazy-bg-ed955994-d4a0-48c0-a2ca-ceffc4d59ade="loaded"></i>
								<i class="huff" data-rocket-lazy-bg-4ac20cc2-821c-4954-8fa7-ae483b3d4704="loaded"></i>
								<i class="moz" data-rocket-lazy-bg-a9c10fcb-be10-4fb3-b80c-faf58ec371db="loaded"></i>
							</div>
        </div>
        <div className="right-column">
        <img src={macbookImage} alt="Showcase" className="showcase-image" />

        </div>
      </div>
    </section>
     
     
     </>
    
  )
}

export default HomePage;
