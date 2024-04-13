const heading = React.createElement(
  "div",
  { id: "headings" },
  React.createElement(
    "div",
    { id: "child" },
    [
        React.createElement("h1", { id: "heading" }, 'hai fahiz its react'),
        React.createElement("h", { id: "heading" }, 'hai fahiz its react')

    ]
  )
);
ReactDOM.render(heading, document.getElementById("root"));
