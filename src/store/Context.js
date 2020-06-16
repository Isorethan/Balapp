import React, {Component, createContext} from 'react';

export  const Context = createContext();


export class ContextProvider extends Component {

    state = {
        initialPosition:{lat: 57.74,lng: 11.94,zoom: 13,},
        currentMarkerPosition:null,
        routeIsOn:false,
        currentRoute:[],
        isMapInit: false,
        weatherIsOpen:false,
        routeListIsOpen:false,
        isLogged:false,
        
      };

      saveMap = map => {
        this.map = map;
        this.setState({
          isMapInit: true
        });
      };

      setWeather=(e) =>{
        e.preventDefault();
         this.setState({
           weatherIsOpen:!this.state.weatherIsOpen
         })
       }

      setsCurrentMarkerPosition(){

      }

      setIsLogged(){
          this.SetState({

          })
      }
      render(){
          const {children}= this.props
          const {initialPosition}= this.state
          const {isMapInit}= this.state
          const {weatherIsOpen}= this.state
          const {saveMap}= this
          const {setWeather}= this
        return (
                <Context.Provider value={{initialPosition, isMapInit, saveMap, weatherIsOpen, setWeather }}>
                    {children}
                </Context.Provider>
                )
      }
   
}