import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Example({isModal, toggleModal, selectedActor}) {

  return (
    <div>
      <Modal isOpen={isModal} toggle={toggleModal} >

        <ModalHeader toggle={toggleModal}>{selectedActor.name}</ModalHeader>

        <ModalBody>

          
          {
            typeof selectedActor.known_for !== 'undefined' &&
              selectedActor.known_for.map((movie, index) => {
                return (
                    <div key={index}>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                    </div>
                )
            })
          }
          

        </ModalBody>


        <ModalFooter>
        
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>

      </Modal>
    </div>
  );
}

export default Example;