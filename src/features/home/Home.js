import "./Home.css"
import LeftSide from '../defualt_Layouts/leftSide';
import RightSide from '../defualt_Layouts/rightSide';


function Home() {


  return (
    <section className='column'>
      <div className='row overlay'>
        <LeftSide/>
          <span id='HomeOverlay'>
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

  


export default Home