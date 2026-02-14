import { useEffect, useState, useCallback } from "react";
import { fetchProducts } from "./services/api";
import ProductTable from "./components/ProductTable";
import Loader from "./components/Loader";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  // NEW FEATURES
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  //Loading Products (Infinite Scroll):-
  const loadProducts = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      const data = await fetchProducts(skip);

      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + 10);
    } catch (error) {
      console.error("Error fetching products:", error);
    }

    setLoading(false);
  }, [skip, loading]);

  useEffect(() => {
    loadProducts();
  }, []);

  //Editable Title & Save to Local Storage:-
  const handleTitleChange = (id, newTitle) => {
    const updated = products.map((product) =>
      product.id === id ? { ...product, title: newTitle } : product
    );

    setProducts(updated);

    // Save edits locally
    localStorage.setItem("products", JSON.stringify(updated));
  };

  //Loading from local storage on START
  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  //SEARCH + SORT LOGIC
  const filteredProducts = [...products]
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "price") return a.price - b.price;
      if (sortType === "rating") return b.rating - a.rating;
      return 0;
    });

  const bottomRef = useInfiniteScroll(loadProducts, loading);

  //UI:-
  return (
    <div className="app-container">
      <h2 className="title">📦 Product Dashboard</h2>

      {/* Search + Sort Controls */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd"
          }}
        />

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd"
          }}
        >
          <option value="">Sort</option>
          <option value="price">Price ↑</option>
          <option value="rating">Rating ↓</option>
        </select>
      </div>

      <ProductTable
        products={filteredProducts}
        onTitleChange={handleTitleChange}
      />

      {loading && <Loader />}

      <div ref={bottomRef} style={{ height: "20px" }} />
    </div>
  );
}

export default App;
