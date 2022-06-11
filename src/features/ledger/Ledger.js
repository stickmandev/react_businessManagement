import { useState, useEffect, useMemo } from 'react';
import useAccess from "../accessToken"
// import {}

function Ledger() {

  const {access, setAccess} = useAccess('')
//   setAccess("jdjdjk")
  console.log(access)

  //   const [flowList, setFlowList] = useState([]);
//   const [flow, setFlow] = useState([]);
//   const [flowPages, setFlowPages] = useState([]);
//   const [flowPage, setFlowPage] = useState(0);
//   const [flow_DateSorted, setFlow_DateSorted] = useState([]);
//   const [emptyTR, setEmptyTR] = useState([]);
//   const [flowId, setFlowId] = useState([]);

//   const [steamList, setStreamList] = useState([]);
//   const [stream, setStream] = useState([]);
//   const [streamHeader, setStreamHeader] = useState([]);
//   const [StreamPages, setStreamPages] = useState([]);
//   const [Streampage, setStreamPage] = useState(0);

//   const [display, setDisplay] = useState("none");
//   const [offsetTop, setoffsetTop] = useState(0);
//   const [trHeight, setTrHeight] = useState(0);

//   const streamWidth = 27.5
//   const periodWidth = 46
//   const snWidth = periodWidth*(0.1)
//   const dateWidth = periodWidth*(0.2)
//   const descriptionWidth = periodWidth*(0.7)
//   const flowWidth = streamWidth/2
//   const table_width = (stream.length*streamWidth) + periodWidth

//   // CashStream data management----------------------------------------------------------------------------------------------------
//   const stream_Success = async(data) => {
//     await setStreamList(data.results);
//     const newPages = [];
//     if (data.count > 10) {
//       for (let i=0; i<Math.ceil(data.count / 10); i++) {
//         newPages.push({
//           name: (i+1).toString(),
//           page: i,
//         });
//         console.log("page",i);
//       }
//       if (Streampage > newPages.length-1) {
//         await setStreamPage(Streampage-1);
//       }
//     } else {
//       await setStreamPage(0);
//     }
//     await setStreamPages(newPages);
//   };

//   const getStreamData = async()=>{
//     await get_cashStream(Streampage, stream_Success, (text)=>{console.log("Error: ", text)});
//   };
//   useEffect(()=>{
//     getStreamData();
//   }, [Streampage]);

//   useEffect(() => {
//     setStream(
//       steamList.map(function(item){
//         return(
//           <div className="th stream" coldiv="2" style={{width:`${streamWidth}%`}}>{item.name}</div>
//         )
//       })
//     );

//     setStreamHeader(
//       steamList.map(function(item){
        
//         return(
//           <>
//             <div className="th" rowdiv="2" style={{width:`${flowWidth}%`}}>Credit</div>
//             <div className="th" rowdiv="2" style={{width:`${flowWidth}%`}}>Debit</div>
//           </>
//         )
//       })
//     )
//   }, [steamList]);


//   // CashFlow data management--------------------------------------------------------------------------------------------------
//   const flow_Success = async(data) => {
//     await setFlowList(data.results);
//     const newPages = [];
//     if (data.count > 10) {
//       for (let i=0; i<Math.ceil(data.count / 10); i++) {
//         newPages.push({
//           name: (i+1).toString(),
//           page: i,
//         });
//         // console.log("page",i);
//       }
//       if (flowPage > newPages.length-1) {
//         await setFlowPage(page-1);
//       }
//     } else {
//       await setFlowPage(0);
//     }
//     await setFlowPages(newPages);
//   };

//   const getData = async()=>{
//     await get_cashFlow(flowPage, flow_Success, (text)=>{console.log("Error: ", text)});
//   };

//   useEffect(async()=>{
//     await getData();
//   }, [flowPage]);
  

//   // send flow list to the dom
//     useEffect(() => {   
//       let newList = []
//       const trEmpty = []

//         steamList.map(
//           function(streamItem, id, arr){
//             trEmpty.push(
//               <>
//                 <div className="td" style={{width:`${flowWidth}%`}}></div>
//                 <div className="td" style={{width:`${flowWidth}%`}}></div>
//               </>
//             );
            
//             return (
//                 flowList.map(
//                   async function(flowItem, pk, flow_arr){

//                     if (flowItem.CashStream_Data.name === arr[id].name){
//                     const nullTd = [];
//                     const reversNullTd = [];
//                     const editDelete = [];

//                       for( var i =0; i < id; i++ ){
//                         nullTd.push(
//                           <>
//                             <div className="td" id={flowItem.id} style={{width:`${flowWidth}%`}}>0</div>
//                             <div className="td" id={flowItem.id} style={{width:`${flowWidth}%`}}>0</div>
//                           </>
//                         );
//                       };

//                       for(var i = (arr.length-1); id < i; i-- ){
//                         reversNullTd.push(
//                           <>
//                             <div className="td" id={flowItem.id} style={{width:`${flowWidth}%`}}>0</div>
//                             <div className="td" id={flowItem.id} style={{width:`${flowWidth}%`}}>0</div>
//                           </>
//                         );

//                       };

                      


//                       const sortByDateTime = flowItem.created_at.replace(/-|:|[ \t]/g,"");

                      

//                       await newList.push(
//                         <div className="tr" key={sortByDateTime} id={flowItem.id} onMouseMove={mouseInEditDelete} onMouseOver={mouseInEditDelete} onMouseOut={mouseOutEditDelete}>
//                           <div className="td" id={flowItem.id} style={{width:`${snWidth}%`}}>{flow_arr.length-pk}</div> 
//                           <div className="td" id={flowItem.id} style={{width:`${dateWidth}%`}}> {flowItem.created_at.slice(0, 10)} <br/> {flowItem.created_at.slice(10)}  </div>
//                           <div className="td discriptionTd" id={flowItem.id} style={{width:`${descriptionWidth}%`}}>{flowItem.description}</div>
//                           {nullTd}
//                           <div className="td" id={flowItem.id} style={{width:`${flowWidth}%`}}>{flowItem.Debit}</div> 
//                           <div className="td" id={flowItem.id} style={{width:`${flowWidth}%`}}>{flowItem.Credit}</div>
//                           {reversNullTd}
//                         </div>
//                       )
//                     }
//                   }
//                 )
//           )
//           }
//         )

//       setFlow( newList );
//       setEmptyTR(trEmpty)
//   }, [flowList, setFlow, deleteFlowData]);

//   // delete flow data
//   const deleteFlowData = async()=>{
//     await delete_cashFlow(flowId, flow_Success);
//     getData()
//     setDisplay("none")
//   };




// // const boxRef = React.useRef(null);
// // const table_overlayRef = React.useRef(null);

// // const mouseInEditDelete = (e) => {
// //   setDisplay("flex")

// //   let target = e.target
// //   // let elem = document.getElementsByClassName('flowTr')[0].getClientRects()[0]

// //   // console.log(e);
// //   // console.log(elem);
// // //   console.log(document.getElementsByClassName('flowTr')[0].getClientRects()[0])
// // //   console.log(boxRef);
// //   // console.log(table_overlayRef.offsetTop);
// // //   console.log(e.target.offsetTop);
// //   // console.log("screenY:" + e.screenY);
// //   // console.log("offsetY:" + e.pageY);
// //   // console.log("clientY:" + e.clientY);
// // //   console.log(target.offsetTop);

// // //   setoffsetBottom(target.offsetHeight)
// // //   setoffsetTop(boxRef.current.scrollHeight)
// // //   setoffsetTop(target.offsetTop )
// //   if(target.offsetTop<(table_overlayRef.offsetTop+table_overlayRef.offsetHeight)){
// //     setoffsetTop(target.offsetTop )
// //   }
// //   // setoffsetTop(target.offsetTop )
// //   // setoffsetTop(e.pageY )
// //   // setoffsetTop(e.screenY )
// //   setTrHeight(target.offsetHeight)
// // }



// const mouseInEditDelete = (e) => {
//   let target = e.target
//   let scrolled_by = document.getElementsByClassName('table_overlay')[0].scrollTop

//   setFlowId(target.id)
//   setoffsetTop(target.offsetTop - scrolled_by)
//   setTrHeight(target.offsetHeight)
//   setDisplay("flex")
// }

// const mouseOutEditDelete = () => {
//   // alert('mouce out')
//   setDisplay("none")
// }


//   return (
//     <>
//       <div id="big_table_overlay">
//         <div id="table_overlay" className="table_overlay" >
//           <div id="table-ledger" className ='table' style={{ width:`${table_width}%`}} >
//             <div id="thead" >
//               <div className="tr" id="trFirstRow">
//                 <div className="th" coldiv="3" id="period" style={{width:`${periodWidth}%`}}>12/04/22 - 12/04/22</div>
//                 {stream}             
//               </div>
//               <div className="tr" id="trSecondRow">
//                 <div  className="th" id="snHeader" style={{width:`${snWidth}%`, position: `sticky`, left: `${0}`}}>S/N</div>
//                 <div  className="th" id="dateHeader" style={{width:`${dateWidth}%`, position: `sticky`, left: `${snWidth+0.7}%`}}>Date</div>
//                 <div   className="th" id="descriptionHeader" style={{width:`${descriptionWidth}%`, position: `sticky`, left: `${snWidth+dateWidth+1.2}%`}}>Description</div>
//                 {streamHeader}
//               </div>
//             </div>
//             <div id="tbody">
//               {flow.sort(function(a, b){return a.key - b.key})}
//               <div className="tr" id="addTr">
//                 <div className="td"style={{width:`${snWidth}%`}}></div> 
//                 <div className="td"style={{width:`${dateWidth}%`}}></div>
//                 <div className="td discriptionTd" style={{width:`${descriptionWidth}%`}}>Add</div>
//                 {emptyTR}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div id="EditDeleteOverlay" onMouseOver={()=>{ setDisplay("flex") }} onMouseOut={mouseOutEditDelete} style={{  display:display, top:offsetTop, height:trHeight}} >
//         <button onClick={deleteFlowData} >X</button><br/>
//         <button></button>
//       </div>
//     </>
//   );
}
  


export default Ledger