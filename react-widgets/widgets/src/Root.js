import React from "react";
import Clock from "./Clock";
import Folder from "./Folder";
import Weather from "./Weather";
import Autocomplete from "./Autocomplete";

const folders = [
  { title: "one", content: "I am the first" },
  { title: "two", content: "Second folder here" },
  { title: "three", content: "Third folder here" },
];
const names = ["Caitlin", "Jerel"];

function Root() {
  return (
    <div>
      <Clock />
      <Folder folders={folders} />
      <Weather></Weather>
      <Autocomplete names={names} />
    </div>
  );
}

export default Root;
