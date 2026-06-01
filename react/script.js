// const element = React.createElement("h1", {id:"first"}, "Hello Faisal Khan");

function App() {
    return (
        <h1 id="first" style={{color: "red", backgroundColor: "yellow"}}>Hello From the Other side</h1>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
