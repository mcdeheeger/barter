import React, { Component} from 'react';

// Include the Query and Results components
import Query from "./searchChildren/Query";
import Results from "./searchChildren/Results";


// Create the Search component
class Search extends Component {

    // getInitialState() {
    //     return {
    //         need_results: {},
    //         have_results: {},
    //         need_query: "",
    //         have_query: "",
    //     };
    // }

    // setQuery(newQuery, isNeed) {
    //     if (isNeed) {
    //         helpers.needSearch(newQuery).then(function (data) {
    //             this.setState({need_query: newQuery});
    //             this.setState({need_results: {docs: data}});
    //         }.bind(this));
    //     } else {
    //         helpers.haveSearch(newQuery).then(function (data) {
    //             this.setState({have_query: newQuery});
    //             this.setState({have_results: {docs: data}});
    //         }.bind(this));
    //     }
    // }

    // Render the component. Note how we deploy both the Query and the Results Components
    render() {
        // console.log("COMPONENT RENDERED");
        // console.log(this.props, "ID PROPS")
        // console.log(this.state.need_results, "JOOJOJOJOJOJ")
        return (
            <div className="main-container">
                {/*<div>*/}
                {/*<button onClick={this.google}>google</button>*/}
                {/*</div>*/}
                {/* Note how we pass the setQuery function to enable Query to perform searches */}

                <div>
                    <Query />
                    {/* Note how we pass in the results into this component */}
                    <Results />
                </div>

            </div>
        );
    }
}

export default Search;