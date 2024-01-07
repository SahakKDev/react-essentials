import { useState } from "react";
import TabButton from "./TabButton";

import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  const { title, description, code } = EXAMPLES[selectedTopic] || {};

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  const tabButtons = (
    <>
      <TabButton
        key={title}
        isSelected={selectedTopic === "components"}
        onClick={() => handleSelect("components")}
      >
        Components
      </TabButton>

      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => handleSelect("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => handleSelect("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => handleSelect("state")}
      >
        State
      </TabButton>
    </>
  );

  return (
    <Section id="examples" title="Examples">
      <Tabs buttons={tabButtons}>{tabContent}</Tabs>
    </Section>
  );
}
