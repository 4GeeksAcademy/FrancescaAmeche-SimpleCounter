import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
        
    return (
        <div className="container-fluid bg-black d-flex justify-content-center m-4">
            <div className="text-white border border-1 rounded mt-4 mb-4 me-4 bg-dark d-flex justify-content-center" style={{width: "150px", height: "200px", fontSize: "120px"}}><i className="fa-regular fa-clock"></i></div>
            <div className="text-white border border-1 rounded mt-4 mb-4 me-4 bg-dark d-flex justify-content-center" style={{width: "150px", height: "200px", fontSize: "120px"}}>{props.digitSix % 10}</div>
            <div className="text-white border border-1 rounded mt-4 mb-4 me-4 bg-dark d-flex justify-content-center" style={{width: "150px", height: "200px", fontSize: "120px"}}>{props.digitFive % 10}</div>
            <div className="text-white border border-1 rounded mt-4 mb-4 me-4 bg-dark d-flex justify-content-center" style={{width: "150px", height: "200px", fontSize: "120px"}}>{props.digitFour % 10}</div>
            <div className="text-white border border-1 rounded mt-4 mb-4 me-4 bg-dark d-flex justify-content-center" style={{width: "150px", height: "200px", fontSize: "120px"}}>{props.digitThree % 10}</div>
            <div className="text-white border border-1 rounded mt-4 mb-4 me-4 bg-dark d-flex justify-content-center" style={{width: "150px", height: "200px", fontSize: "120px"}}>{props.digitTwo % 10}</div>
            <div className="text-white border border-1 rounded mt-4 mb-4 bg-dark d-flex justify-content-center" style={{width: "150px", height: "200px", fontSize: "120px"}}>{props.digitOne % 10}</div>
        </div>
    );
};

SecondsCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);

    counter++;

    ReactDOM.render(<SecondsCounter digitOne = {one} digitTwo = {two} digitThree = {three} digitFour = {four} digitFive = {five} digitSix = {six}/>, document.querySelector("#app"));
}, 1000);