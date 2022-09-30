import { useState, useEffect, useMemo } from 'react';
import useAccess from "../auths/accessToken"
import Streams from './components/Streams'
import FlowDomManagement from './components/Flow'
import "./ledger.css"
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import CreateFlow from './components/CreateFlow';
import EditFlow from './components/EditFlow';
import LeftSide from '../defualt_Layouts/leftSide';
import RightSide from '../defualt_Layouts/rightSide';
import SubNav from '../defualt_Layouts/subNav';
import SubNav_mobile from '../defualt_Layouts/subNav_mobile';
import useGlobalState from "../../Store_&_State/GlobalState"

import { clear_nav } from '../defualt_Layouts/slices/navSlice'
import { ledger_mobileNav } from '../defualt_Layouts/slices/navSliceMobile'
import { useSelector, useDispatch } from 'react-redux'

import NumberFormat from 'react-number-format';

function Ledger(stream_length) {
  const [blurIndex, setBlurIndex] = useState(0);
  
  const {total_balance, setTotal_balance} = useGlobalState('');
  const {grandTotal, setGrandTotal} = useGlobalState('');

  const streamWidth = 27.5
  const periodWidth = 46
  const table_width = (stream_length*streamWidth) + periodWidth

  const dispatch = useDispatch()

  useEffect(
    () => {
        dispatch(clear_nav())
        dispatch(ledger_mobileNav())
    },[]
  )

  // useEffect(() => {
  //   // const leftNav_selected = document.getElementsByClassName('leftNav_selected')

  //   // for( var i =0; i < leftNav_selected.length; i++){
  //   //   leftNav_selected[i].style.backgroundColor = 'var(--color1)'
  //   //   leftNav_selected[i].style.color = 'var(--color2)'
  //   // }

  //   const cashbook = document.getElementsByClassName('cashbook')
  //   console.log(cashbook)
  //   cashbook[0].style.backgroundColor = 'var(--color5)'
  // }, []);

  return (
    <>
      <section id="ledger_section" className='column'style={{filter:`blur(${blurIndex}px)`}}>
        <SubNav visibility="visible"/>
        <div className='row overlay'>
          <LeftSide/>
            <ScrollSync>
            <div id="row1_scroll_overlay">
              <span id='row1' >
                <div id="big_table_overlay"> 
                  <div id="table_overlay" className="table_overlay" >
                    <div>
                      <div id="table-ledger" className ='table' style={{ width:`${table_width}vw`}} >
                        <Streams/>
                    
                        <FlowDomManagement blur={setBlurIndex} Stream={Streams}/>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='totals'>
                  <ScrollSyncPane>
                  <div id="balances_overlay" >
                    {total_balance}
                  </div>
                  </ScrollSyncPane>

                  <div id='grand_Total_overlay'>
                    <strong><p>Grand Total($)</p></strong>
                    <div id="grand_Total">
                      <h1 id='grandTotal_text' className='stream'>
                        <NumberFormat
                          value={grandTotal}
                          displayType={'text'}
                          thousandSeparator={true}
                          // prefix={'$'}
                        />
                      </h1>
                    </div>
                  </div>
                </div>
                {/* <SubNav_mobile/> */}
              </span>
            </div>
            </ScrollSync>
          <CreateFlow blur={setBlurIndex}/>
          <EditFlow blur={setBlurIndex}/>
          <RightSide/>
        </div>
        <SubNav_mobile/>
      </section>
    </>
  );
}

  


export default Ledger