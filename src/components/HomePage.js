import React from 'react'
import './HomePage.css';
import macbookImage from '../assets/macbook.png';
import buyingbusiness from '../assets/buying-business-2.png';
import { motion } from 'framer-motion';
import sellers from '../assets/sellers.png';

import amazon from '../assets/amazon-associates.svg';

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



  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    // Here you can add logic to send the email to your backend or email service
  };

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






<div className="subscription-section">
      <h2>We Publish New Businesses Every Monday</h2>
      <p>Enter your email below to be the first "In the Know"</p>
      <form className="subscription-form" onSubmit={handleSubscribe}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="subscription-input" 
          required
        />
        <button type="submit" className="subscription-button">Get Notify</button>
      </form>
    </div>








    <section className="how-it-works">
  <div className="how-it-works-content">
    <div className="image-column">
      <img src={buyingbusiness}  alt="How It Works" className="how-it-works-image" />
    </div>
    <div className="text-column">
      <h2>How It Works</h2>
      <h3>Buying a Business</h3>
      <p>
        Visit our marketplace to find profitable online businesses for sale. From passive
        investments to more involved assets, we’ve got them all.
      </p>
      <p>
        See an online business or website you like? Unlock the listing for access to
        everything you need to review your potential purchase: URL, Google Analytics, Profit & Loss
        Statement, etc.
      </p>
      <a href="/how-to-buy" className="how-to-buy-button">How to Buy a Business</a>
    </div>
  </div>
</section>







<section className="how-it-works-sell">
  <div className="how-it-works-content">
    <div className="text-column">
      <h2>How It Works</h2>
      <h3>Selling Your Business</h3>
      <p>
        Sell your website or online business hassle-free. We hold your hand through the process, 
        step-by-step, and weed out non-serious buyers. We even transfer the business to the buyer 
        so you don’t have to.
      </p>
      <p>
        You make more money with us than if you sell on your own. You don’t need to buy software. 
        You don’t need to contact your web host. We do it all on your behalf.
      </p>
      <a href="/how-to-sell" className="how-to-sell-button">How to Sell a Business</a>
    </div>
    <div className="image-column">
      <img src={sellers} alt="Selling Your Business" className="how-it-works-image" />
    </div>
  </div>
</section>










<section className="popular-monetizations">
  <div className="monetizations-header">
    <h2>Popular Monetizations</h2>
    <p>
      Explore an exclusive selection of established online businesses for sale 
      by selecting a category you are interested in below.
    </p>
  </div>
  <div className="monetizations-grid">
    <div className="monetization-card">
      <img src={amazon} alt="Amazon Associates" />
      <h3>Amazon Associates</h3>
      <p>15 Listings</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon FBA" />
      <h3>Amazon FBA</h3>
      <p>70 Listings</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon FBM" />
      <h3>Amazon FBM</h3>
      <p>3 Listings</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon KDP" />
      <h3>Amazon KDP</h3>
      <p>9 Listings</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon Merch" />
      <h3>Amazon Merch</h3>
      <p>2 Listings</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Display Advertising" />
      <h3>Display Advertising</h3>
      <p>36 Listings</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="DropShipping" />
      <h3>DropShipping</h3>
      <p>10 Listings</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="eCommerce" />
      <h3>eCommerce</h3>
      <p>28 Listings</p>
    </div>
  </div>
</section>


    </>

  )
}

export default HomePage;
