import React from 'react';
import Modal from 'react-modal';
import FadeImage from 'react-fade-image';



const WouloModal = (props) => (
        <div className="col-WA">
            <p className="lead-WA">
                {!props.selectedWoulo && <img alt width="180px" src='/images/rocket.png' />}
            </p>

        
         <div className="fb-like" data-href="http://localhost:8080/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>


        </div>
    );

export default WouloModal;