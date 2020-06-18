import React, {Component, createContext} from 'react';

export  const Context = createContext();


export class ContextProvider extends Component {

    state = {
        initialPosition:{lat: 48.111339,lng: -1.68002,zoom: 13,},
        currentMarkerPosition:null,
        routeIsOn:false,
        currentRoute:[],
        isMapInit: false,
        weatherIsOpen:false,
        routeListIsOpen:false,
        isLogged:false,
        weatherLocation:null, 
        weatherData:null
      };

      saveMap = map => {
        this.map = map;
        this.setState({
          isMapInit: true
        });
      };


      setWeatherState= (query) =>{
          console.log(query)
        // let Url = `http://api.weatherstack.com/${time}?access_key=2f611ef3163a6efb098c07a2587762b4&query=${query} `;
        let Url = `http://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lng}&appid=1811371791e304b557ace681d2f41dcd`
        fetch(Url).then(res =>
           res.json()).then(res => {
              this.setState({
                weatherData:res,
                weatherIsOpen:true
                
              })

          }).catch(err => console.log(err))
        ;
        
      }

      setWeatherLocation(data){
        this.setState({
          weatherLocation:data
        })
      }

    
      componentDidMount(){
  
      
      }


     


      setWeatherData= (data) =>{

          this.setState({
                WeatherData:data
            })
            ;
       
      }
    

     

      setWeather=() =>{
      
         this.setState({
           weatherIsOpen:!this.state.weatherIsOpen
         })
       }

      setCurrentMarkerPosition=(e)=>{
        this.setState({
          currentMarkerPosition:[e.latlng.lat, e.latlng.lng]
       })
       window.alert(e.latlng)
      }

      setIsLogged(){
          this.setState({
              isLogged:!this.state.isLogged
          })
      }
      render(){
          const {children}= this.props
          const {initialPosition}= this.state
          const {isMapInit}= this.state
          const {currentMarkerPosition}= this.state
          const {setCurrentMarkerPosition}= this
          const {saveMap}= this
          const {setWeather}= this
          const { setWeatherState } = this
          const {setWeatherLocation}= this  
          const {weatherLocation}= this.state
          const {setWeatherData}= this
          const {weatherIsOpen}= this.state
          const {weatherData}= this.state
        return (
                <Context.Provider value={{
                 initialPosition,
                 isMapInit,
                 saveMap, 
                 weatherIsOpen,
                 weatherLocation, 
                 setWeather, 
                 currentMarkerPosition, 
                 setCurrentMarkerPosition,
                 setWeatherData,
                 setWeatherLocation, 
                 weatherData, 
                 setWeatherState   }}>
                    {children}
                </Context.Provider>
                )
      }
   
}