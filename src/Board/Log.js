import React from 'react';
import { connect } from 'react-redux'
import { mapStateToProps } from './mapStateToProps';

const Log = props => {
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default connect(mapStateToProps)(Log);