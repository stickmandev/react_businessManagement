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
import useGlobalState from "../../Store_&_State/GlobalState"

import { clear_nav } from '../defualt_Layouts/slices/navSlice'
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
    },[]
  )


  return (
    <section className='column'style={{filter:`blur(${blurIndex}px)`}}>
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
            </span>
          </div>
          </ScrollSync>
        <CreateFlow blur={setBlurIndex}/>
        <EditFlow blur={setBlurIndex}/>
        <RightSide/>
      </div>
    </section>
  );
}

  


export default Ledger