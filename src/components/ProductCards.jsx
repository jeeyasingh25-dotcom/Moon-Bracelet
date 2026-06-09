function ProductCards() {
  const products = [
    {
      name: "Rose Gold Bracelet",
      price: "₹1499",
      image:
        "https://vembley.com/cdn/shop/products/1_5a9cae45-c40e-45e1-bfb2-b48c1be87f6e.jpg?v=1658984938",
    },

    {
      name: "Silver Moon Bracelet",
      price: "₹1899",
      image:
        "https://img.tatacliq.com/images/i29/1348Wx2000H/MP000000029880754_1348Wx2000H_202601280739421.jpeg",
    },

    {
      name: "Luxury Diamond Bracelet",
      price: "₹2499",
      image:
        "data:image/jpeg;base64,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",
    },

    {
      name: "Couple Bracelet Set",
      price: "₹1999",
      image:
        "https://cdn.shopify.com/s/files/1/0680/4792/9570/files/1688_image_share_60d6a8d03b4b12cc213ea19630e516bf.jpg?v=1710935832",
    },

    {
      name: "Pearl Bracelet",
      price: "₹1399",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX35tp1-tlpIRQFzamOh7y6TMesfjIDpntxQ&s",
    },

    {
      name: "Pandora Bracelet",
      price: "₹1699",
      image:
        "https://www.yuvaflowers.com/cdn/shop/files/latest-stylish-pandora-crystal-diamonds-charms-rose-gold-gift-bracelet-for-women-girls3.webp?v=1768813835",
    },

    {
      name: "Combo Offer Set",
      price: "₹2999",
      image:
        "https://cdn.shopify.com/s/files/1/0553/0445/4310/files/0e019b49-1107-4bcf-b8f0-431e7116aab9_640x640.jpg.webp?v=1747947647",
    },

    {
      name: "Luxury Ring",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Moon Star Bracelet",
      price: "₹1599",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qPIQPo3rSqQxWxavQoRMBBJW_FYoyEXLvw&s",
    },
  ];

  return (
    <div className="products">
      <h2>Trending Products</h2>

      <div className="offer">
        <h3>BUY 1 GET 1 FREE ON RINGS 💍</h3>
      </div>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt="" />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button>Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;