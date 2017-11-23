import React, {Component} from 'react';

// This component demonstrates a class based component.
class searchBar extends Component {
    constructor(props) {
        super(props);
        //whenever we use state, we initialize it by creating a new object and assigning it to state
        this.state = {term: ''}
    }

    render() {
        // This is a special React Defined property=> onChange
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}
                />
            </div>)
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
}

export default searchBar;
