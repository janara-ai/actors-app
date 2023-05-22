import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ReactDOM } from 'react-dom';
import { DebounceInput } from 'react-debounce-input';

import { act } from 'react-dom/test-utils';
import { Button } from 'reactstrap';

import PageComponent from './components/PageComponent';
import Modal from './components/Modal';
import TooltipCop from './components/TooltipCop';



const App = () => {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [imgURL, setImgURL] = useState('https://image.tmdb.org/t/p/w185');
  const [isModal, setIsModal] = useState(false);
  const [selectedActor, setSelectedActor] = useState({})
  const [value, setValue] = useState('');


useEffect(() => {
  fetchData();
}, [])
  const fetchData = () => {
  fetch(`https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${currentPage}`)
  .then(res => res.json())
  .then(data => setData(data.results), setIsLoading(false))
 }

  const changePage = (num) => {
  
  setCurrentPage(num);
  fetchData();
 }
 const toggleModal = () => { 
  setIsModal(!isModal)
}
const setActor = (actorObj) => {
  setSelectedActor(actorObj)
}
  const filteredActors = data.filter(actor => {
    return actor.name.toLowerCase().substr(0, value.length) === value;
  })
    
    return(
      <div className='App'>
        <PageComponent changePage={changePage}/>
        <DebounceInput
        minLength={2}
        debounceTimeout={800}
        onChange={event => setValue(event.target.value)}/>
        <p>Value: {value}</p>
        <div className='actors'>
        {
          !isLoading && filteredActors.length &&
            filteredActors.map(actor => {
              const url = imgURL+actor.profile_path
              return(
                <div className='single-actor' key={actor.id} id={actor.name.replace(/\s/g, '')}>
                  <img src={url}/>
                  <p>{actor.name}</p>
                  <button onClick={() => {
                    toggleModal();
                     setActor(actor)
                     } }>Show More</button>
                     <TooltipCop id ={actor.name.replace(/\s/g, '')} name={actor.name}/>
                </div>

              )
            })
        }
            <Modal isModal={isModal} toggleModal={toggleModal} selectedActor={selectedActor}/> 

        </div>
      </div>
    )
  
}

export default App;
