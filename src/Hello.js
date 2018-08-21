import React, { Component } from 'react';

// Components always extend from the Component class
class Hello extends Component {
    // Components always need a render() method
    render(){
        // everything enlosed in the brackets of the return() method makes up the
        // component which can be used as a view on the page
        return (
            <div class="myDiv">
                 <h1>My first React page</h1>
                 <h4>Dzengiz dipped his toes in React</h4>
                 <h5>A first attempt to a component</h5>
                 <p>Commodo et occaecat qui deserunt consequat occaecat laborum sit aute. Deserunt commodo proident eu dolor irure magna sit sunt exercitation. Cupidatat Lorem aliqua aute et in occaecat culpa ut ut qui. Aute labore qui qui occaecat. Mollit sunt Lorem ut fugiat mollit consequat esse deserunt tempor est magna. Aliquip proident do est enim quis. Elit irure velit dolor in.</p>

                 <p>Do aliquip amet eu in ad. Amet id adipisicing commodo laboris laborum do. Eiusmod est mollit ad laboris occaecat ad est cillum aliquip aliqua irure sunt tempor. Quis aliquip ad quis nostrud dolore proident enim est. Labore cillum ex cupidatat ut officia ullamco.</p>
            </div>
        )
    }
}

// The class Hello needs to be exported to be used
export default Hello;