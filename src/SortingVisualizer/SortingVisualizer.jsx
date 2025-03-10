import React from "react";
import './SortingVisualizer.css';
import * as SortingAlgo from '/Users/aryanvasudeva/algorithm-visualizer/src/SortingAlgorithms/SortingAlgorithms.js'

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {array: [],}; // main array
    }


    componentDidMount(){
        this.resetArray(); // as soon as the app reloads or when this component loads, the reset function is called
    }

    resetArray(){
        const array = []; // generates an array
        for(let i = 0; i < 100; i++){ // number of elements in the array
            array.push(randomIntFromInterval(5,730)); // value of each element in the array, why did we start with 5 is because the bars are not visible for a value below 5 
            
        }// we are also allowing duplicate values
        this.setState({array}); // reset the state to the new array
    }

    mergeSort(){
        const animations = SortingAlgo.mergeSort(this.state.array);
        console.log("Sorted Array:", this.state.array);
        const newAnimations = [];
        for(const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
            
        }
        for(let i = 0; i<newAnimations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            
            const isColorChange = i%3 !== 2;
            if(isColorChange){
                const[barOneIdx, barTwoIdx] = newAnimations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? 'yellow' : 'grey';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = newAnimations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    
                    barOneStyle.height = `${newHeight}px`; 
                    barOneStyle.backgroundColor = 'green';
                    
                    
                    
                }, i * 5);
            }
            
            
        }
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('array-bar');
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].style.backgroundColor = 'green';
            }
        }, newAnimations.length * 5);
    }
    quickSort(){

    }
    selectionSort(){

    }
    bubbleSort(){

    }
    


    render(){
        const{array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => ( // mapping the array elements with the indecies 
                // bar height (in pixels) = value of the array 
                    <div 
                        className = "array-bar"
                        key = {idx}
                        style = {{height: `${value}px`}} 
                        backgroundColor = 'grey'
                        >
                    </div>
                ))}
                <button onClick={() => this.resetArray()}> Generate New Array </button> 
                <button onClick={() => this.mergeSort()}> Merge Sort </button> 
                <button onClick={() => this.quickSort()}> Quick Sort </button> 
                <button onClick={() => this.selectionSort()}> Selection Sort </button> 
                <button onClick={() => this.bubbleSort()}> Bubble Sort </button> 
            {/* the button tp generate new random Array */}
            </div> 
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}'$(value)'

