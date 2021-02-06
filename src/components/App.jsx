import React from "react";
import Header from "./Header";
import Term from "./Term";
import emojipedia from "../emojipedia";

function createTerm(emojipedia) {
  return (
    <Term
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(createTerm)}</dl>
    </div>
  );
}

export default App;
