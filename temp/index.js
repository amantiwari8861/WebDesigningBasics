function setTimer() {
    const element1 = `
    <div>
    <h1>JS</h1>
    <input type="text">
    <p>${new Date().toLocaleTimeString()}
    </div>
    `;
    document.getElementById("container1").innerHTML = element1;
    const element2 = React.createElement("div", null,
        React.createElement("h1", null, "React"),
        React.createElement("div", null,
            React.createElement("input", null, { type: "text" })),
        React.createElement("p", null, new Date().toLocaleTimeString())
    )
}
setInterval( setTimer,1000);
ReactDOM.render(element2, document.getElementById("container2"));