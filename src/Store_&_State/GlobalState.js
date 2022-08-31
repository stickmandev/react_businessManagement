import {createContext, useContext, useState} from 'react'
import ReactDOM from "react-dom/client";

export const GlobalState = createContext(null)
const useGlobalState = () => useContext(GlobalState)
export default useGlobalState

export const GlobalStateProvider = ({children}) => {
  const [stream, setStream] = useState('')
  const [streamList, setStreamList] = useState([])
  const [priodStart, setPriodStart] = useState([])
  const [priodEnd, setPriodEnd] = useState([])
  
  const [createFlowModalIsOpen, setCreateFlowIsOpen] = useState(false);
  const [editFlowIsOpen, setEditFlowIsOpen] = useState(false);
  const [reRender, setReRender] = useState(false);

  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [search, setSearch] = useState('');

  const [ratioDetailList, setRatioDetailList] = useState([]);
  const [totalExpensis, setTotalExpensis] = useState('');
  const [totalExpenditure, setTotalExpenditure] = useState('');
  const [profit, setProfit] = useState('');
  const [profitMargin, setProfitMargin] = useState('');
  const [markup, setMarkup] = useState('');

  const [total_balance, setTotal_balance] = useState('');
  const [grandTotal, setGrandTotal] = useState('0.00');

  const [flowId, setFlowId] = useState([]);
  

  return (
    <GlobalState.Provider value={{ 
        stream, setStream, 
        streamList, setStreamList,
        priodStart, setPriodStart,
        priodEnd, setPriodEnd,
        
        createFlowModalIsOpen, setCreateFlowIsOpen,
        editFlowIsOpen, setEditFlowIsOpen,
        reRender, setReRender,
        
        start_date, setStart_date,
        end_date, setEnd_date,
        filterCategory, setFilterCategory,
        search, setSearch,

        ratioDetailList, setRatioDetailList,
        totalExpensis, setTotalExpensis,
        totalExpenditure, setTotalExpenditure,
        profit, setProfit,
        profitMargin, setProfitMargin,
        markup, setMarkup,

        total_balance, setTotal_balance,
        grandTotal, setGrandTotal,
        
        flowId, setFlowId,
      }}>

      {children}
    </GlobalState.Provider>
  )
}

