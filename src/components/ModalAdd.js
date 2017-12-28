import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { history } from '../routers/AppRouter';







class ModalAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  facebookshare() {
    FB.ui({
    method: 'share',
    display: 'popup',
    mobile_iframe: true,
    redirect_uri: history.push('/ajoutetonwoulo')
  }, function(response){});
}



  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}> Ajoute ton Woulo </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <button onClick={this.facebookshare} >facebook</button>
            </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalAdd;