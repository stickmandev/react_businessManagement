import LeftSide from '../defualt_Layouts/leftSide';
import RightSide from '../defualt_Layouts/rightSide';
import SubNav from '../defualt_Layouts/subNav';
// import "./ServiceNotAvailable.css"
import SubNav_mobile from '../defualt_Layouts/subNav_mobile';

import './SserviceNotAvailable.css'

function ServiceNotAvailable() {
    

  return (
    <section className='column'>
        <SubNav visibility="hidden"/>
        <div className='row overlay'>
        <LeftSide/>
            <span id='settingsOverlay'>
              <div id='oops_Overlay'>
                <div id="oopsIcon"></div>
                <p>Oops! There is nothing here yet</p>
                <p>We will notify you as soon as this feature is available</p>
              </div>
            </span>
        <RightSide/>
        </div>
        <SubNav_mobile/>
    </section>
  )
}

export default ServiceNotAvailable