import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { products, categories, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = ({ onProductClick, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = getProductsByCategory(selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchTerm('');
  };

  return (
    <div className="products-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-title">
            <h1>Our Products</h1>
            <p>Discover our handcrafted crochet collection</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="filters-section">
          <div className="filters-content">
            {/* Search */}
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              <Filter size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>

            {/* Clear Filters */}
            {(selectedCategory !== 'All' || searchTerm) && (
              <button className="clear-filters" onClick={clearFilters}>
                Clear Filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="results-count">
            <p>
              Showing {filteredProducts.length} of {products.length} products
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`products-grid ${viewMode}`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <ProductCard
                  product={product}
                  onProductClick={onProductClick}
                  addToCart={addToCart}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-content">
              <h3>No products found</h3>
              <p>
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
              <button className="btn btn-primary" onClick={clearFilters}>
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 