import "./styles.css";
import React from "react";

export default function App() {
  const [formData, setFormData] = React.useState({
    title: "",
    gender: "",
    price: "",
    imageUrl: "",
    id: 1
  });
  const inputRef = React.useRef(null);

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;

    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(inputRef.current.files[0]);
  };

  const { gender, price, title, imageUrl } = formData;
  return (
    <div className="App">
      <h3>Admin Dashboard</h3>
      <br />
      <form onSubmit={handleSubmit}>
        Title:{" "}
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          onChange={handleChange}
          value={title}
        />
        <br />
        Gender:{" "}
        <input
          type="text"
          placeholder="Enter Gender"
          name="gender"
          onChange={handleChange}
          value={gender}
        />
        <br />
        Price:{" "}
        <input
          type="Number"
          placeholder="Enter Price"
          name="price"
          onChange={handleChange}
          value={price}
        />
        <br />
        <label>
          Image URL :{" "}
          <input
            type="text"
            checked={imageUrl}
            onChange={handleChange}
            name="imageUrl"
          />
        </label>
        <br />
        <input type="submit" value="SUBMIT FORM" />
      </form>
    </div>
  );
}
