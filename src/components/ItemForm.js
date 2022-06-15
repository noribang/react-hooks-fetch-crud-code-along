import React, { useState } from "react";

/* PASS TO ITEMFORM. ADD ITEM. */
function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  /* EVENT. ADD NEW ITEM.*/
  function handleSubmit(e) {
    e.preventDefault();
    // console.log("name: ", name)
    // console.log("category: ", category)
    /* New item object. */
    const itemData = {
      name: name,
      category: category,
      isInCart: false,
    }
    // console.log(itemData)
    /* FETCH. ADD NEW ITEM. */
    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => onAddItem(newItem));
  }

  return (
    /* EVENT. ADD NEW ITEM. */
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;



//////////////////////////////////////////////////////
// import React, { useState } from "react";

// function ItemForm({ onAddItem }) {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("Produce");

//   function handleSubmit(e) {
//     e.preventDefault();
//     const itemData = {
//       name: name,
//       category: category,
//       isInCart: false,
//     };
//     fetch("http://localhost:4000/items", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(itemData),
//     })
//       .then((r) => r.json())
//       .then((newItem) => onAddItem(newItem));
//   }

//   return (
//     <form className="NewItem" onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>

//       <label>
//         Category:
//         <select
//           name="category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;
