import React from 'react';
import Action from './Action';
import PrintWoulo from './PrintWoulo';
import AfficheWoulo from './AfficheWoulo';
import * as firebase from 'firebase';



export default class WouloApp extends React.Component {
    state = {
        Woulos: [],
        selectedWoulo: undefined,
        pickedNumber: []
    };


    handleAddPickedNumber = (x) => {
        x.preventDefault();

        const picked = x.target.elements.pickedNumber.value.trim();
        const pickedNumber = this.props.handleAddWoulo(picked);

        this.setState(() => ({ pickedNumber }));

        if(!pickedNumber){
            x.target.elements.pickedNumber.value = '';
        }

    };

    //Fonction that Pick the Woulo which will appear 
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.Woulos.length);
        const Woulo = this.state.Woulos[randomNum];
        this.setState(() => ({
            selectedWoulo: Woulo
        }));
    };

    handleSelecWoulo = () => {
        this.setState(() => ({ selectedWoulo : undefined }));
    }

    componentDidMount(){
        const rootRef = firebase.database().ref().child('open');
        const wouloRef = rootRef.child('woulo');
        wouloRef.on('value', snap => {
            this.setState({
                Woulos : snap.val()
            })
        });
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.Woulos.length !== this.state.Woulos.length){
            const json = JSON.stringify(this.state.Woulos);
            localStorage.setItem('Woulos', json);
        }
    };

    componentWillUnmount(){
        console.log('componentWillUnmount');
    };

    render(){
        return (
            <section className="jumbotron-header-WA text-center-WA mb-3-WA jumbotron-WA">
                <div className="container-WA">
                    <div className="row-WA">
                        <PrintWoulo 
                        selectedWoulo={this.state.selectedWoulo}
                        handleSelecWoulo={this.handleSelecWoulo}
                        />
                            <h1 className="jumbotron-heading-WA display-4-WA h1-WA" > Génère les meilleurs woulos</h1>
                            <p className="lead-WA p-WA" > A chaque clique, tu feras lever le maison ! </p>
                            <Action
                            hasWoulos={this.state.Woulos.length > 0}
                            handlePick={this.handlePick}
                            />
                        </div>
                        </div>
                        <AfficheWoulo
                        selectedWoulo={this.state.selectedWoulo}
                        handleSelecWoulo={this.handleSelecWoulo} 
                        />
                  
                
            </section>
        );
    }  
}

