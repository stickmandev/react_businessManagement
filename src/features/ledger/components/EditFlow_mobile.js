import { useState, useEffect } from 'react';
import React from 'react'
import './editFlow.css'
import useGlobalState from "../../../Store_&_State/GlobalState"
import useAccess from "../../auths/accessToken"
import {edit_cashFlow, get_edit_cashFlow} from './api/cashFow_CRUD'
import {get_categories, create_categories} from "./api/categories_api"
import {get_savedTransctions, create_savedTransctions} from './api/savedTransaction_api'
import NumberFormat from 'react-number-format';
import SubNav_mobile from '../../defualt_Layouts/subNav_mobile';

function EditFlow_Mobile(prop) {
    const [description, setDescription] = useState("");
    const [selected_Streamm, setSelected_Streamm] = useState("");
    const [credit, setCredit] = useState('');
    const [debit, setDebit] = useState('');
    const [categoryList, setcategoryList] = useState("");
    const [categorySelected, setCategorySelected] = useState("");
    const [newCategory, setNewCategory] = useState("");
    // const [selected_Category, setSelected_Category] = useState("");
    const [savedTransaction, setSavedTransaction] = useState('');
    const [categorySelectFontWieght, setCategorySelectFontWieght] = useState("bolder");
    const [selectTransactonFontWeight, setSelectTransactonFontWeight] = useState("bolder");
    const [categorySelectColor, setCategorySelectColor] = useState("");
    const [selectTransactonColor, setSelectTransactonColor] = useState("");
    const [stream, setStream] = useState([]);
    const [savedTransctionList, setSavedTransctionList] = useState([]);
    
    const {access, setAccess} = useAccess('')
    const {editFlowIsOpen, setEditFlowIsOpen} = useGlobalState([]);
    const {streamList, setStreamList} = useGlobalState([]);
    const {reRender, setReRender} = useGlobalState([0]);
    const {flowId, setFlowId} = useGlobalState([]);

    
    
    const set_Access = (Access_token) => {
        setAccess(Access_token)
    }


    // set stream data............................................................................................
    useEffect(() => {
        setStream(
          streamList.map(function(item){
            return(
                <button className='streamBTNs' id={'stream'+item.id} required onClick={(e)=>{ 
                    e.preventDefault(); 
                    setSelected_Streamm(item.id);
                    const streamBTNs = document.getElementsByClassName('streamBTNs')

                    for( var i =0; i < streamBTNs.length; i++){
                        streamBTNs[i].style.backgroundColor = 'white'
                        streamBTNs[i].style.color = 'rgb(142, 143, 196)'
                    }

                    e.target.style.backgroundColor = 'rgb(142, 143, 196)'
                    e.target.style.color = 'white'
                }}>
                    {item.name}
                </button>
            )
          })
        );
    
    }, [streamList]);

    // reacord edit.................................................................................................
    const record_edit_Success = async() => {
        setEditFlowIsOpen(false);
        prop.blur(0)
        setReRender(reRender+1)
        alert("record edited")
        setDescription('')
        setCredit('')
        setDebit('')
    };

    const edit_Data = async(e)=>{
        // alert('hj')
        e.preventDefault()
        await edit_cashFlow(flowId, description, selected_Streamm, credit, debit, categorySelected, record_edit_Success, access, set_Access);
    };


    // get saved transactions........................................................................................
    const getSavedTransction_success = (text) => {
        const data = JSON.parse(text)
        setSavedTransctionList(
            data.results.map(function(item){
              return(
                <option value={JSON.stringify(item)}>{item.description}</option> 
              )
            })
        )
    }

    const getSavedTransction_fail = () => {
        
    }
    
    const load_savedTransactions = () => {
        get_savedTransctions(getSavedTransction_success, getSavedTransction_fail, access, setAccess)
        
    }

    //apply saved transaaction 
    const applySavedTransaction = (e) => {
        const selected = JSON.parse(e.target.value)
        if(selected !== ""){
            setCategorySelected(selected.category)
            setCredit(selected.Credit)
            setDebit(selected.Debit)
            setSelected_Streamm(selected.cashStream)
            const streamBTNs = document.getElementsByClassName('streamBTNs')
            for( var i =0; i < streamBTNs.length; i++){
                streamBTNs[i].style.backgroundColor = 'white'
                streamBTNs[i].style.color = 'rgb(142, 143, 196)'
            }
            document.getElementById('stream'+selected.cashStream).style.backgroundColor = 'rgb(142, 143, 196)'
            document.getElementById('stream'+selected.cashStream).style.color = 'white'
            setDescription(selected.description)
        }else{
            setCategorySelected('')
            const categoriesInput = document.getElementsByClassName('categoriesInput')
            for( var i =0; i < categoriesInput.length; i++){
                categoriesInput[i].checked = false
            }
            setCredit('')
            setDebit('')
            setSelected_Streamm('')
            const streamBTNs = document.getElementsByClassName('streamBTNs')
            for( var i =0; i < streamBTNs.length; i++){
                streamBTNs[i].style.backgroundColor = 'white'
                streamBTNs[i].style.color = 'rgb(142, 143, 196)'
            }
            setDescription('')
        }
    }


    // GET category ..................................................................................................
    const getCategories_success = async(data) => {
        setcategoryList(
            data.results.map(function(item){
              return(
                <option value={JSON.stringify(item.id)}>{item.name}</option> 
              )
            })
        )

    };

    const getCategories_fail = async(failed) => {
        console.log(failed)
    };

    const load_categories = () => {
        get_categories(getCategories_success, getCategories_fail, access, setAccess)
        
    }
    

    // category created................................................................................................
    const create_Category_Success = () => {
        alert('category created')
        load_categories() 
        setNewCategory('')
    }

    const create_Category = async(e)=>{
        e.preventDefault()
        await create_categories(newCategory, create_Category_Success, access, set_Access);
    };

    
    // save transactions..............................................................................................
    useEffect(
        () => {
            if(savedTransaction === '' || savedTransaction === JSON.stringify('')){
                setSelectTransactonFontWeight("bolder")
                setSelectTransactonColor('gray')
            }else{
                setSelectTransactonFontWeight("normal")
                setSelectTransactonColor('black')
            }

            if(categorySelected === '' || categorySelected === JSON.stringify('')){
                setCategorySelectFontWieght('bold')
                setCategorySelectColor('gray')
            }else{
                setCategorySelectFontWieght('normal')
                setCategorySelectColor('black')
            }
        },[savedTransaction, categorySelected]
    )

    const saveTransaction_Success = async(data, page) => {
        alert("transaction saved")
        load_savedTransactions()
    };

    const saveTransaction = (e) => {
        e.preventDefault()
        create_savedTransctions(description, selected_Streamm, credit, debit, categorySelected, saveTransaction_Success, access, set_Access) 
    }

    // get get Edit data........................................................................................
    const getEdit_data_success = (text) => {
        const values = JSON.parse(text)
        setCategorySelected(values.category)
        setCredit(values.Credit)
        setDebit(values.Debit)
        setSelected_Streamm(values.cashStream)
        const streamBTNs = document.getElementsByClassName('streamBTNs')
        for( var i =0; i < streamBTNs.length; i++){
            streamBTNs[i].style.backgroundColor = 'white'
            streamBTNs[i].style.color = 'rgb(142, 143, 196)'
        }
        document.getElementById('stream'+values.cashStream).style.backgroundColor = 'rgb(142, 143, 196)'
        document.getElementById('stream'+values.cashStream).style.color = 'white'
        setDescription(values.description)
    }

    const getEdit_data_fail = () => {
        
    }

    const load_edit_data = () => {
        get_edit_cashFlow(flowId, getEdit_data_success, getSavedTransction_fail, access, setAccess)
    }

    // modal management......................................................................................................
    function closeModal(e) {
        e.preventDefault();
        window.location.assign("/ledger")
    }

    useEffect(() => {
        load_categories()
        load_savedTransactions()
        load_edit_data()
    }, []);

  return (
    <>
        <div id='editFormMobileOverlay'>
            <form id="editFormMobile" className='column' >
                <div id='record_Header_Overlay' className='row'>
                    <h2>Edit Record</h2> 
                    <button onClick={closeModal}></button>
                </div>
                
                <div id='descriptionOverlay' className="">
                    Description<br/>
                    <input className="record_form" autoFocus type="text" id="description" placeholder="e.g. worker salary" onChange={(e)=>{setDescription(e.target.value)}} value={description} /><br/>
                </div>

                <div id='accountOverlay'>
                    <p id='accountOverlay_p'>Account<br/></p> 
                    <div>
                        {stream}
                    </div>
                </div><br/>
                
                <div id='AmountOverlay' className="inputTextOverlay">
                    <p id='AmountOverlay_p'>Amount<br/></p> 
                    <div className='row'>
                        <div>
                            Credit<NumberFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                className="record_form" 
                                type="credit"
                                placeholder="0.00" 
                                onChange={(e)=>{setCredit(e.target.value)}} 
                                value={credit}
                            />
                        </div>
                        
                        <div>
                            <span>Debit</span>
                            <NumberFormat 
                            thousandSeparator={true} 
                                prefix={'$'} 
                                className="record_form" 
                                type="debit" 
                                placeholder="0.00" 
                                onChange={(e)=>{setDebit(e.target.value)}} 
                                value={debit}
                            />
                        </div>
                    </div>
                </div>
        
                <div id='categoryOverlay' className='column'>
                    <p id='categoryOverlay_p'>Category <br/></p> 
                    <label>
                        <select value={categorySelected} onChange={(e)=>{setCategorySelected(e.target.value)}} style={{fontWeight:categorySelectFontWieght, color:categorySelectColor}} >
                            <option value={JSON.stringify('')}>Choose category</option>
                                {categoryList }
                            {/* <option value="grapefruit">coco</option> */}
                        </select>

                        <div id='addCategoryOverlay'>
                                <input className="add_category" placeholder="Add new category"  type="text" id="category" onChange={(e)=>{setNewCategory(e.target.value)}} value={newCategory} />
                                <button onClick={create_Category}></button>
                        </div>
                    </label>
                </div>

                <div id='savedTransactionOverlay' className='row'>
                    <label>
                        <select value={savedTransaction} onChange={(e)=>{setSavedTransaction(e.target.value); applySavedTransaction(e)}} style={{fontWeight:selectTransactonFontWeight, color:selectTransactonColor}} >
                            <option value={JSON.stringify('')}>Choose transactions</option>
                                {savedTransctionList}
                        </select>
                    </label>
                    <div className='column'>
                        <button onClick={saveTransaction}></button>
                        Save transaction
                    </div>
                </div>
                
                <div id="BTN_overlay" >
                    <div>
                        <button id="submit"  value="Done" onClick={closeModal}>cancel</button>
                        <button id="submit" type="submit" value="Done" onClick={edit_Data}>Done</button>
                    </div>
                </div>
            </form>
        </div>
        <SubNav_mobile/>
    </>
  )
}

export default EditFlow_Mobile