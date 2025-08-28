// Performance reporting helper (from Create React App).
// If you pass a function (onPerfEntry), CRA will measure core web vitals
// and pass them to your function. You could log them or send to analytics.
//
// Example usage in index.js:
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);

const reportWebVitals = onPerfEntry => {
  // Guard: only run if a valid callback is provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import to avoid increasing initial bundle size
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Callbacks will receive metric objects (name, value, id, etc.)
      getCLS(onPerfEntry);  // Cumulative Layout Shift
      getFID(onPerfEntry);  // First Input Delay
      getFCP(onPerfEntry);  // First Contentful Paint
      getLCP(onPerfEntry);  // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time To First Byte
    });
  }
};

export default reportWebVitals;