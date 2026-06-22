
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"

import Input from "./components/Input/Input";
import Button from "./components/button/Button";
import Checkbox from "./components/checkbox/Checkbox";
import Radio from "./components/radio/Radio";
import Select from "./components/select/Select";
import Switch from "./components/switch/Switch";
import Slider from "./components/slider/Slider";
import Textarea from "./components/textarea/TextArea";
import FileUpload from "./components/fileupload/FileUpload";
import NumberInput from "./components/numberinput/NumberInput";
import FloatingActionButton from "./components/floatingButton/FloatingButton";
import Rating from "./components/rating/Rating";
import Card from "./components/card/Card";
import Alert from "./components/alert/Alert";
import Badge from "./components/badge/Badge";
import Avatar from "./components/avatar/Avatar";
import Modal from "./components/modal/Modal";
import Navbar from "./components/navbar/NavBar";
import Tabs from "./components/tabs/Tabs";
import Tooltip from "./components/tooltip/Tooltip";
import Loader from "./components/loader/Loader";
import Pagination from "./components/pagination/Pagination";
import SearchBar from "./components/searchbar/Searchbar";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Animation from "./components/animations/Animations";
import Router  from "./components/router-dom/router";

// Router DOM
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";



function App() {

  // Input state
  const [name, setName] = useState("");
  
  // Checkbox state
  const [isChecked, setIsChecked] = useState(false);
  
  // Radio state
  const [gender, setGender] = useState("");
  
  // Select state
  const [country, setCountry] = useState("");
  const countries = ["Pakistan", "USA", "UK", "UAE"];

   // Switch state
  const [darkMode, setDarkMode] = useState(false);

    // Slider state
  const [volume, setVolume] = useState(50);

  // Textarea state
  const [comment, setComment] = useState("");

  // FileUpload state
   const [files, setFiles] = useState([]);

   // NumberInput State
   const [age, setAge] = useState(18);

   // Rating state
   const [rating, setRating] = useState(0);

   // Modal State
   const [open, setOpen] = useState(false);
    const links = [
      { label: "Home", path: "#" },
      { label: "About", path: "#" },
      { label: "Services", path: "#" },
      { label: "Contact", path: "#" },
  ];

  // Tabs data
   const tabData = [
    {
      label: "Home",
      content: <p>Welcome to Home page</p>
    },
    {
      label: "Profile",
      content: <p>This is your Profile section</p>
    },
    {
      label: "Settings",
      content: <p>Manage your settings here</p>
    }
  ];

  // Loader states
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  // Pagination state
   const [page, setPage] = useState(1);
  const totalPages = 5;

  // Searchbar
   const handleSearch = (value) => {
    console.log(value);
  };


  // Breadcrumb
   const pages = [

    {
      label: "Home",
      path: "#",
    },

    {
      label: "Products",
      path: "#",
    },

    {
      label: "Laptops",
      path: "#",
    },

    {
      label: "MacBook Pro",
    },

  ];

  return (
    <>
     <Navbar
        logo="Navbar"
        links={links}
      />
      <br />
      <h2>Router Example</h2>
        <Router/>
      
      <br /><hr />
      <Navbar
        logo="Router Example"
        links={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Products", path: "/products" },
        ]}
      />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <br/>
      <hr/>

       <h2>Tabs Example</h2>

      <Tabs tabs={tabData} />

    <br /><hr />
    <h2>Search Bar</h2>
     <SearchBar
        placeholder="Search products..."
        onSearch={handleSearch}
      />
    <br /><hr />
    <h2>Breadcrumb</h2>
     <Breadcrumb
        items={pages}
        separator=">"
      />


    <br /><hr />
     <h2>Pagination Example</h2>

      <p>Current Page: {page}</p>

      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={(p) => setPage(p)}
      />
    <br /><hr />

     <h2>Loader Example</h2>

      {/* {loading ? (
        <Loader size="large" color="primary" />
      ) : (
        <h3>Data Loaded Successfully ✅</h3>
      )} */}
      <Loader size="large" color="primary" />

<br /><br /><hr />
    <h1>UI Components</h1>
    <br />
      <hr />
      <h2>Animations</h2>

          <Animation type="fade">
        <h2>Fade</h2>
      </Animation>

      <br /><br />

      <Animation type="slide">
        <button>Slide</button>
      </Animation>

      <br /><br />

      <Animation type="zoom">
        <button>Zoom</button>
      </Animation>

      <br /><br />

      <Animation type="bounce">
        <button>Bounce</button>
      </Animation>

      <br /><br />

      <Animation type="pulse">
        <button>Pulse</button>
      </Animation>

      <br /><br />

      <Animation type="shake">
        <button>Shake</button>
      </Animation>

      <br /><hr />

    <h2>Buttons</h2>
      <Button variant="primary">
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="success">
        Success
      </Button>

      <Button variant="danger">
        Danger
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button disabled>
        Disabled
      </Button>

      <br />
      <hr />

      <h2>Input</h2>
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>You typed: {name}</p>
    
      <br />
      <hr />

      <h2>Checkbox</h2>
       <Checkbox
        label="I agree to terms and conditions"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <p>
        Status: {isChecked ? "Accepted" : "Not Accepted"}
      </p>

      <br />
      <hr />

      <h2>Radio Buttons</h2>
      <h3>Select Gender</h3>

      <Radio
        name="gender"
        value="male"
        label="Male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />

      <Radio
        name="gender"
        value="female"
        label="Female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />

      <Radio
        name="gender"
        value="other"
        label="Other"
        checked={gender === "other"}
        onChange={(e) => setGender(e.target.value)}
      />

      <p>Selected: {gender}</p>

      <br />
      <hr />

      <h2>Select</h2>
      <Select
        label="Choose Country"
        options={countries}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <p>Selected: {country}</p>

      <br />
      <hr />

      <h2>Switch</h2>
      <h3>Dark Mode</h3>
      <Switch
        label="Enable Dark Mode"
        checked={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />

      <p>Status: {darkMode ? "ON" : "OFF"}</p>

     <br />
      <hr />
       
       <h2>Slider</h2>
      <h3>Volume Control</h3>
      <Slider
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />

      <p>Volume: {volume}</p>

      <br />
      <hr />

      <h2>Textarea</h2>
      
      <h3>Feedback</h3>
      <Textarea
        value={comment}
        placeholder="Write your feedback..."
        onChange={(e) => setComment(e.target.value)}
      />

      <p>Your comment: {comment}</p>

      <br />
      <hr />

      <h2>File Upload</h2>
      <FileUpload
        label="Choose File"
        multiple={true}
        onChange={(e) => {
          setFiles(Array.from(e.target.files));
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <h4>Selected Files:</h4>

        {files.map((file, index) => (
          <p key={index}>
            📄 {file.name}
          </p>
        ))}
      </div>

    <br />
    <hr />
      <h2>Number Input</h2>
       <h3>Enter Age</h3>

      <NumberInput
        value={age}
        min={0}
        max={100}
        step={1}
        onChange={(e) => setAge(e.target.value)}
      />

      <p>Your age: {age}</p>

      <br/>
      <hr/>
      <h2>Floating Action Button Demo</h2>

      <FloatingActionButton
        icon="+"
        position="bottom-right"
        color="primary"
        onClick={() => alert("FAB Clicked!")}
      />

      <br/>
      <hr/>
      <h2>Rating</h2>
      <h3>Rate this product</h3>

      <Rating
        value={rating}
        onChange={(newRating) => setRating(newRating)}
      />

      <p>Your rating: {rating} / 5</p>

      <br/>
      <hr/>
      <h2>Card</h2>
       <Card
        title="React UI Library"
        image="https://picsum.photos/300/200"
      >

        <p>
          Building reusable components using
          pure React and CSS.
        </p>

      </Card>
      
      <br/>
      <hr/>
      <h2>Alert</h2>
       <Alert
        type="success"
        message="Data saved successfully."
      />

      <Alert
        type="error"
        message="Something went wrong."
      />

      <Alert
        type="warning"
        message="Please check your input."
      />

      <Alert
        type="info"
        message="New update available."
      />

      <br/>
      <hr/>
      <h2>Badges</h2>
        <Badge
        text="New"
        variant="primary"
      />

      <Badge
        text="Success"
        variant="success"
      />

      <Badge
        text="Sale"
        variant="warning"
      />

      <Badge
        text="Premium"
        variant="dark"
      />

      <Badge
        text="99+"
        variant="danger"
      />

      <br/>
      <hr/>
      <h2>Avatar</h2>
       <Avatar
        name="Mudassir Shah"
        size="small"
      />
       <Avatar
        src="https://i.pravatar.cc/150"
        alt="Mudassir Shah"
        size="medium"
      />
      <Avatar
        name="React"
        size="large"
      />

      <br/>
      <hr/>
      <h2>Modal</h2>
      <button
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={open}
        title="React Modal"
        onClose={() => setOpen(false)}
      >

        <p>
          This is a modal component.
        </p>

      </Modal>
     
      <br /><hr/>

    <h2>Tooltip</h2>
     <Tooltip text="Click to submit form" position="top">
        <Button variant="primary">
          Submit
        </Button>
      </Tooltip>

      <br />

      <Tooltip text="Delete item" position="right">
        <button>🗑 Delete</button>
      </Tooltip>
<br />
<hr />
      
    
    </>
  );
}

export default App;