export const fetchProducts = async (skip = 0) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${skip}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
