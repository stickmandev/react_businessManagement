import "./profit.css"
import { useState, useEffect } from 'react';
import LeftSide from '../../../defualt_Layouts/leftSide';
import RightSide from '../../../defualt_Layouts/rightSide';
import SubNav from '../../../defualt_Layouts/subNav';
import moneytree from '../../../../icons/moneytree.png'

const ProfitMargin = () => {
    return (
      <section className='column'>
        <SubNav/>
        <div className='row overlay'>
          <LeftSide/>
            <div id='profitOverlaay'>
                <div id='ratio_ProfitMargin_flag'>
                    <div><h3>Profit</h3></div>
                    <div>
                        <img id="img" src={moneytree} alt="" />
                        <h1>23<sup className='sub'>%</sup></h1>
                        <h3>$500,000</h3>
                        <p> Total Revenue:900,000</p>
                        <p>Total Expensis:200,000</p>
                    </div>
                </div>
            </div>
          <RightSide/>
        </div>
      </section>
    );
}

export default ProfitMargin;
