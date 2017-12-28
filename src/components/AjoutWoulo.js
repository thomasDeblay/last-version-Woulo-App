import React from 'react';
import { connect } from 'react-redux';
import { startAddWoulo } from '../actions/woulo';
import WouloForm from './WouloForm';

export class AjoutWoulo extends React.Component {

    onSubmit = (woulo) => {
        this.props.startAddWoulo(woulo);
        this.props.history.push('/');
      };


    render(){
        return (
            <div>
                <WouloForm
                onSubmit={this.onSubmit}
                 />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddWoulo: (Woulo) => dispatch(startAddWoulo(Woulo))
});

export default connect(undefined, mapDispatchToProps)(AjoutWoulo);
