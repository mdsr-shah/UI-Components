import { useState } from "react";
import "./Tabs.css";

function Tabs({ tabs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs-wrapper">

      {/* Tab Headers */}
      <div className="tabs-header">

        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}

      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {tabs[activeIndex] && tabs[activeIndex].content}
      </div>

    </div>
  );
}

export default Tabs;