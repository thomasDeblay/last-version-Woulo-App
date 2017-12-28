import React from 'react';

const AfficheWoulo = (props) => (
    <div className="login-form" >
        <div className="login-form__box">
        {props.selectedWoulo && <h5 className="login-form__title " > Woulooooo Ba mwen bagay la, woulooo Ba mwen bagay la, Woulooooo ba mwen bagay la , blablablablabla </h5>}
         {props.selectedWoulo && <p> {props.selectedWoulo}</p>}
         </div>
    </div>
);

export default AfficheWoulo;