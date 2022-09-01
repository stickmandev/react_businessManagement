import "./KeepSafe.css"
import LeftSide from '../defualt_Layouts/leftSide';
import RightSide from '../defualt_Layouts/rightSide';


function KeepSafe(stream_length) {


  return (
    <section className='column'>
      <div className='row overlay'>
        <LeftSide/>
          <span id='KeepSafeOverlay'>
            <div id='oops_Overlay'>
              <p>Oops! There is nothing here yet</p>
              <p>We will notify you as soon as this feature is available</p>
              <div id="oopsIcon"></div>
            </div>
          </span>
        <RightSide/>
      </div>
    </section>
  );
}

  


export default KeepSafe