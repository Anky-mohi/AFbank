import React from 'react'
import './HomePage.css';
import macbookImage from '../assets/macbook.png';
import { motion } from 'framer-motion';

const HomePage = () => {

  const listings = [
    { 
      monetization: "eCommerce", 
      niche: "Beauty", 
      id: "#80328", 
      profit: "$65,406.00", 
      price: "$1,438,910.00", 
      link: "/listing/80328" 
    },
    { 
      monetization: "Amazon FBA", 
      niche: "Art, Children, Hobbies, Occasions & Gifts", 
      id: "#80821", 
      profit: "$25,213.00", 
      price: "$1,134,540.00", 
      link: "/listing/80821" 
    },
    {
      monetization: "Multiple",
      niche: "Newsletter, Display Advertising, Quizzes, Entertainment, Information",
      id: "#80590",
      profit: "$34,592.00",
      price: "$1,037,760.00",
      link: "/listing/80590"
    },
    {
      monetization: "Amazon FBA",
      niche: "Supplements",
      id: "#79631",
      profit: "$9,612.00",
      price: "$346,036.00",
      link: "/listing/79631"
    },
    {
      monetization: "Amazon KDP",
      niche: "News & Education, Information, Books",
      id: "#81053",
      profit: "$7,314.00",
      price: "$219,419.00",
      link: "/listing/81053"
    },
    {
      monetization: "Amazon FBA",
      niche: "Occasions & Gifts",
      id: "#73349",
      profit: "$5,570.00",
      price: "$200,521.00",
      link: "/listing/73349"
    },
    {
      monetization: "Multiple",
      niche: "Newsletter, Subscription, Other, Digital Media, Employment",
      id: "#79094",
      profit: "$2,453.00",
      price: "$88,308.00",
      link: "/listing/79094"
    },
    {
      monetization: "eCommerce",
      niche: "Beauty",
      id: "#81084",
      profit: "$2,696.00",
      price: "$56,595.00",
      link: "/listing/81084"
    },
  ];

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



      <div className="listings-section">
  <div className="listings-header">
    <h2>Our Latest Listings</h2>
  
    <p>Every Monday we publish new businesses for sale on our marketplace.</p>
    
    <p><strong>8 New Listings Published | 159 Listings Total</strong></p>
    
  </div>
  <br></br>
  <br></br>
  {/* Column Headers - Displayed Once */}
  <div className=" header-row">
    <span className="listing-monetization">Monetization</span>
    <span className="listing-niche">Niche</span>
    <span className="listing-id">Listing</span>
    <span className="listing-profit">Monthly Net Profit</span>
    <span className="listing-price">Price</span>
  </div>

  {/* Dynamic Listings */}
  <div className="listings-container">
    {listings.map((listing, index) => (
      <a href={listing.link} className="listing-row" key={index}>
        <div className="listing-content">
          <span className="listing-monetization">{listing.monetization}</span>
          <span className="listing-niche">{listing.niche}</span>
          <span className="listing-id">{listing.id}</span>
          <span className="listing-profit">{listing.profit}</span>
          <span className="listing-price">{listing.price}</span>
        </div>
      </a>
    ))}
  </div>

  <div className="view-all">
    <a href="/all-listings" className="button">View All 159 Listings</a>
  </div>
</div>




    </>

  )
}

export default HomePage;
