import React, { useState } from 'react';
import './SellersListing.css';
import SellerProfile from './SellerProfile'; // Import the profile component

const SellersListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeller, setSelectedSeller] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewProfile = (seller) => {
    setSelectedSeller(seller); // Set the seller that should be displayed in the profile view
  };

  const handleCloseProfile = () => {
    setSelectedSeller(null); // Close the profile view by resetting the state
  };

  const sellers = [
    {
      id: 1,
      name: 'Seller 1',
      image: 'seller1.jpg',
      revenue: '$500K',
      growthRate: '20%',
      profitMargins: '30%',
      type: 'SaaS',
      description: 'Seller 1 is a SaaS company with consistent growth.',
    },
    {
      id: 2,
      name: 'Seller 2',
      image: 'seller2.jpg',
      revenue: '$800K',
      growthRate: '25%',
      profitMargins: '40%',
      type: 'Marketplace',
      description: 'Seller 2 is a fast-growing marketplace with high customer engagement.',
    },
    {
      id: 3,
      name: 'Seller 3',
      image: 'seller3.jpg',
      revenue: '$1M',
      growthRate: '30%',
      profitMargins: '35%',
      type: 'Mobile App',
      description: 'Seller 3 specializes in mobile app development with a growing user base.',
    },
    {
      id: 4,
      name: 'Seller 4',
      image: 'seller4.jpg',
      revenue: '$700K',
      growthRate: '15%',
      profitMargins: '25%',
      type: 'Ecommerce',
      description: 'Seller 4 runs a successful ecommerce business with steady revenue.',
    },
    {
      id: 5,
      name: 'Seller 5',
      image: 'seller5.jpg',
      revenue: '$1.2M',
      growthRate: '40%',
      profitMargins: '50%',
      type: 'Agency',
      description: 'Seller 5 is an agency offering digital marketing services.',
    },
  ];

  return (
    <div className="sellers-listing-fullpage">
      <h2>Explore Sellers</h2>

      {/* Search Input */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search Sellers..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="content-container">
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filter-group">
            <h4>Type</h4>
            <select>
              <option value="all">All</option>
              <option value="saas">SaaS</option>
              <option value="marketplace">Marketplace</option>
              <option value="mobile-app">Mobile App</option>
              <option value="shopify-app">Shopify App</option>
              <option value="ecommerce">Ecommerce</option>
              <option value="agency">Agency</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Price</h4>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>

          <div className="filter-group">
            <h4>Highlights</h4>
            <label>
              <input type="checkbox" /> Connected Metrics
            </label>
            <label>
              <input type="checkbox" /> Under M&A Advisory
            </label>
            <label>
              <input type="checkbox" /> Verified Business
            </label>
          </div>
        </div>

        {/* Sellers Grid Section */}
        <div className="sellers-grid-section">
          <div className="sellers-grid">
            {sellers.map((seller) => (
              <div key={seller.id} className="seller-card">
                <img src={seller.image} alt={seller.name} className="seller-image" />
                <h3>{seller.name}</h3>
                <div className="seller-stats">
                  <p>Annual Revenue: {seller.revenue}</p>
                  <p>Customer Growth Rate: {seller.growthRate}</p>
                  <p>Profit Margins: {seller.profitMargins}</p>
                </div>
                <button className="view-profile-button" onClick={() => handleViewProfile(seller)}>
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile View */}
      {selectedSeller && (
        <SellerProfile seller={selectedSeller} onClose={handleCloseProfile} />
      )}
    </div>
  );
};

export default SellersListing;
