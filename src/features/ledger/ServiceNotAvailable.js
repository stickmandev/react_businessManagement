import LeftSide from '../defualt_Layouts/leftSide';
import RightSide from '../defualt_Layouts/rightSide';
import SubNav from '../defualt_Layouts/subNav';
import "./ServiceNotAvailable.css"

function ServiceNotAvailable() {
    

  return (
    <section className='column'>
        <SubNav visibility="hidden"/>
        <div className='row overlay'>
        <LeftSide/>
            <span id='settingsOverlay'>
              <div id='oops_Overlay'>
                <p>Oops! There is nothing here yet</p>
                <p>We will notify you as soon as this feature is available</p>
                <div id="oopsIcon"></div>
              </div>
            </span>
        <RightSide/>
        </div>
    </section>
  )
}

export default ServiceNotAvailable