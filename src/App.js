import React from 'react';
import { SliderContainer } from './containers/slider';
import data from './data';


function App() {

  return (<SliderContainer data={data} maxWidth={'600px'} height={'60vh'} withDotsNavigation autoslide />)
}

export default App;

//responsive ImageSlider with Style-Components
// navigation :withDotsNavigation withArrowNavigation
// autoslide : on/off
// maxWidth/height : any unit as String
