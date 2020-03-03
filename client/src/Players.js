import React from 'react';

export default class Players extends React.Component {
    constructor(props) {
        super();
    };


    render() {
        let { name, country, searches, id } = this.props;

        return (
            <div id={id}>
                <h1>{name}</h1>
                <h2>{country}</h2>
                <h4>{searches}</h4>
            </div>
        )

    };
};