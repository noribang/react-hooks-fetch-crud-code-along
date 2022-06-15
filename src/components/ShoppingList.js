import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  /* 1. EVENT: Page loads. */
  /* 2. FETCH REQUEST. */
  /* 3. UPDATE STATE */
  /* Add useEffect Hook to fetch items on first page load. */
  /* Side effect. */
  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((r) => r.json())
      // .then((items) => console.log("items: ", items));

      /* UPDATE STATE. items Array of objects.*/
      .then((items) => setItems(items));
  }, []);

  /* UPDATE STATE. DELETE ITEM. */
  /* CALLBACK. PASS AS PROP TO ITEM COMPONENT. */
  function handleDeleteItem(deletedItem) {
    console.log("In SHoppingCart: ", deletedItem)
    const updatedItems = items.filter((item) => item.id !== deletedItem.id);
    /* UPDATE STATE. DELETE ITEM. */
    setItems(updatedItems);
  }

  /* UPDATE STATE. UPDATE ITEM ISINCART. */
  /* callback */
  function handleUpdateItem(updatedItem) {
    console.log("In ShoppingCart: ", updatedItem);  
    const updatedItems = items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    /* UPDATE STATE. */
    setItems(updatedItems);
  
  }

  /* PASS TO ITEMFORM. ADD ITEM. */
  function handleAddItem(newItem) {
    console.log("In SHoppingList: ", newItem);
    /* UPDATE STATE. ITEMS STATE ARRAY. */
    setItems([...items, newItem]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  /* Creates new array filtered from items array. */
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      {/* PASS TO ITEMFORM. ADD ITEM. */}
      <ItemForm onAddItem={handleAddItem}/>
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {/* UPDATE STATE. UPDATE ITEM ISINCART. PASS AS PROP TO ITEM. */}
        {itemsToDisplay.map((item) => (
          <Item 
          key={item.id} 
          item={item} 
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;



