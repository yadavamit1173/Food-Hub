const heading = React.createElement("h1", {
    id: "title"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id: "title",
    amitw: "amit"
}, "Heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
