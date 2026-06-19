
import { useState } from "react";
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

  return (
    <>
    <h1>UI Components</h1>
    <br />
      <hr />

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

    </>
  );
}

export default App;