import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  /* EVENT. UPDATE ITEMS. */
  function handleAddToCartClick() {
    // console.log("clicked item: ", item)
    /* FETCH. UPDATE ITEMS. */
    // Call onUpdateItem, passing 
    // the data returned from the fetch request
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
    
  }

  /* EVENT. DELETE ITEM. */
  /* FETCH. DELETE ITEM. */
  /* UPDATE STATE. */
  function handleDeleteClick() {
    console.log(item)
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      /* CALL CALLBACK */
      .then(() => onDeleteItem(item))
  }
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      {/* EVENT. UPDATE ITEMS. */}
      <button 
        className={item.isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      {/* EVENT. DELETE ITEM */}
      <button 
        className="remove"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </li>
  );
}

export default Item;




//////////////////////////////////////////////////////
// import React from "react";

// function Item({ item, onUpdateItem, onDeleteItem }) {
//   function handleDeleteClick() {
//     fetch(`http://localhost:4000/items/${item.id}`, {
//       method: "DELETE",
//     })
//       .then((r) => r.json())
//       .then(() => onDeleteItem(item));
//   }

//   function handleAddToCartClick() {
//     fetch(`http://localhost:4000/items/${item.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         isInCart: !item.isInCart,
//       }),
//     })
//       .then((r) => r.json())
//       .then((updatedItem) => onUpdateItem(updatedItem));
//   }

//   return (
//     <li className={item.isInCart ? "in-cart" : ""}>
//       <span>{item.name}</span>
//       <span className="category">{item.category}</span>
//       <button
//         className={item.isInCart ? "remove" : "add"}
//         onClick={handleAddToCartClick}
//       >
//         {item.isInCart ? "Remove From" : "Add to"} Cart
//       </button>
//       <button className="remove" onClick={handleDeleteClick}>
//         Delete
//       </button>
//     </li>
//   );
// }

// export default Item;
