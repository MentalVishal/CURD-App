// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

export const SideBar = () => {};
//   //const [searchParams, setSearchparams] = useSearchParams();
//   const initialGender = searchParams.getAll("gender");
//   const [gender, setGender] = useState(initialGender || []);
//   const initialCategory = searchParams.getAll("category");
//   const [category, setCategory] = useState(initialCategory || []);
//   const initialOrder = searchParams.get("order");
//   const [order, setOrder] = useState(initialOrder || "");

//   useEffect(() => {
//     let params = {
//       gender,
//       category,
//     };
//     order && (params.order = order);

//     setSearchparams(params);
//   }, [gender, category, order]);

//   const handelchange = (e) => {
//     const { value } = e.target;
//     let newGender = [...gender];
//     if (newGender.includes(value)) {
//       newGender = newGender.filter((el) => el !== value);
//     } else {
//       newGender.push(value);
//     }
//     setGender(newGender);
//   };

//   const handelCategory = (e) => {
//     const { value } = e.target;
//     let newCat = [...category];
//     if (newCat.includes(value)) {
//       newCat = newCat.filter((el) => el !== value);
//     } else {
//       newCat.push(value);
//     }
//     setCategory(newCat);
//   };

//   const handelOrder = (e) => {
//     setOrder(e.target.value);
//   };

//   console.log(order);

//   return (
//     <div>
//       <h3>Filter by Gender</h3>
//       <div>
//         <input
//           type="checkbox"
//           value={"male"}
//           onChange={handelchange}
//           checked={gender.includes("male")}
//         />
//         <label>Men</label>
//       </div>
//       <div>
//         <input
//           type="checkbox"
//           value={"female"}
//           onChange={handelchange}
//           checked={gender.includes("female")}
//         />
//         <label>Women</label>
//       </div>
//       <div>
//         <input
//           type="checkbox"
//           value={"kids"}
//           onChange={handelchange}
//           checked={gender.includes("kids")}
//         />
//         <label>Kids</label>
//       </div>

//       <br />
//       <br />
//       <br />

//       <h3>Filter by Category</h3>
//       <div>
//         <input
//           type="checkbox"
//           value={"jeans"}
//           onChange={handelCategory}
//           checked={category.includes("jeans")}
//         />
//         <label>Jeans</label>
//       </div>
//       <div>
//         <input
//           type="checkbox"
//           value={"top-wear"}
//           onChange={handelCategory}
//           checked={category.includes("top-wear")}
//         />
//         <label>Top-Wear</label>
//       </div>
//       <div>
//         <input
//           type="checkbox"
//           value={"t-shirt"}
//           onChange={handelCategory}
//           checked={category.includes("t-shirt")}
//         />
//         <label>T-Shirt</label>
//       </div>

//       <br />
//       <br />
//       <br />

//       <h3>Sort by Price</h3>
//       <div onChange={handelOrder}>
//         <input
//           type="radio"
//           name="price"
//           value={"asc"}
//           defaultChecked={order == "asc"}
//         />
//         <label>Ascending</label>
//         <input
//           type="radio"
//           name="price"
//           value={"desc"}
//           defaultChecked={order == "desc"}
//         />
//         <label>Decending</label>
//       </div>
//     </div>
//   );
// };
