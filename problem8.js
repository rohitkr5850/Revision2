const products = [
    { name: "Laptop", price: 1200, rating: 4.7 },
    { name: "Phone", price: 800, rating: 4.3 },
    { name: "Tablet", price: 600, rating: 4.5 },
    { name: "Monitor", price: 300, rating: 4.8 },
    { name: "Keyboard", price: 150, rating: 4.1 },
    { name: "Mouse", price: 100, rating: 4.6 }
  ];
  
  const topProducts = products
    .filter(({ rating }) => rating >= 4.5)
    .sort((a, b) => a.price - b.price)
    .slice(0, 3)
    .map(({ name }) => name);
  
  console.log(topProducts);
  