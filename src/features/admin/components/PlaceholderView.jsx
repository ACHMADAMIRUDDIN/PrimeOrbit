import React from 'react';

const PlaceholderView = ({ title }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border border-gray-100 shadow-sm min-h-[600px]">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
      </div>
      <h2 className="text-2xl font-bold text-secondary mb-3">{title} Module</h2>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        This module is currently under development. The interface and logic for {title} will be available in the upcoming updates.
      </p>
      <button className="bg-secondary text-white px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-colors text-sm font-medium">
        Go Back to Dashboard
      </button>
    </div>
  );
};

export default PlaceholderView;
