// utils/api.js

const baseUrl = "http://localhost:3001";

// Function to fetch all clothing items
export const getAllItems = async () => {
  try {
    const response = await fetch(`${baseUrl}/items`);
    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// Function to add a new clothing item
export const addItem = async (name, imageUrl, weather) => {
  try {
    const response = await fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, imageUrl, weather }),
    });
    if (!response.ok) {
      throw new Error("Failed to add item");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

// Function to delete a clothing item by ID
export const deleteItem = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/items/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete item");
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};
