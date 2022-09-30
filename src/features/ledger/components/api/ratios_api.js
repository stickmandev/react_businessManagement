import {verifyTokens} from "../../../auths/verifyTokens"
import {backendURL} from "../../../../backendURL"
// `${backendURL}/backend_Ledger/cashflow/ratios/weekly?start_date=${start_date}&end_date=${end_date}&date_range=${date_range}`,


export const get_ratioApi = async ( success, fail, ratioPeriodInterval, ratioDateFrom, ratioDateTo, ratioPeriod, access, set_access) => {
    
    // console.log(start_date+"-----To------"+end_date)
    // console.log(filterCategory)
    console.log(ratioPeriod)
    console.log(ratioDateFrom)

    const success_Status = async(status, access_token) => {
    if (status  === 200){
      
      // console.log('fetching cashflow data')
      // fetching cashflow data
      const response = await fetch(
        `${backendURL}/backend_Ledger/cashflow/ratios/${ratioPeriodInterval}?start_date=${ratioDateFrom}&end_date=${ratioDateTo}&date_range=${ratioPeriod}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/JSON',
                'Authorization': `Bearer ${access_token}`,
            }
        }
      );
      const text = await response.text();
      if (response.status === 401) {
        // console.log("accesstoken not valid");
        alert("you are not authorized to view this page")
        window.location.assign("/login");
        return [];
      }
      if (response.status === 200) {
        // console.log("success", JSON.parse(text));
        // console.log('successfuly fetched cashflow data')
        success(JSON.parse(text));
      } else {
        // console.log("failed", text);
        Object.entries(JSON.parse(text)).forEach(([key, value])=>{
          fail(`${key}: ${value}`);
          // console.log('faillllled')
        });
      }
    }
  }

  verifyTokens(access, set_access, success_Status)
  
  success_Status()
};

