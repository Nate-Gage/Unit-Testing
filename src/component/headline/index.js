import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {header, description} = this.props;

        if (!header) {
            return null;
        }

        return (
            <div data-test="headlineComponent">
              <h1 data-test="header">{header}</h1> 
              <p data-test="description">{description}</p>
            </div>
        );
    }
};

Headline.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
};

export default Headline;

