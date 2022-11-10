import {verifyTokens} from "../../../auths/verifyTokens"
import {backendURL} from "../../../../backendURL"


export const get_cashFlow = async ( success, fail, start_date, end_date, filterCategory, search, pagez, access, set_access) => {
  
    // console.log(start_date+"-----To------"+end_date)
    // console.log(filterCategory)
    // console.log(pagez)
    console.log(`%c ${pagez} `, 'background:green; color:white')

    const success_Status = async(status, access_token) => {
    if (status  === 200){
    console.log(search)

      if(search !==''){
        // console.log('fetching cashflow data')
        // fetching cashflow data
        const response = await fetch(
          `${backendURL}/backend_Ledger/cashflow/filter/period?search=${search}&page=${pagez}`,
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
          success(JSON.parse(text), pagez);
        } else {
          // console.log("failed", text);
          Object.entries(JSON.parse(text)).forEach(([key, value])=>{
            fail(`${key}: ${value}`);
            // console.log('faillllled')
          });
        }
      }else if( filterCategory==='' || filterCategory===undefined){
        // console.log('fetching cashflow data')
        // fetching cashflow data
        const response = await fetch(
          `${backendURL}/backend_Ledger/cashflow/filter/period?start_date=${start_date}&end_date=${end_date}&date_range=&category=&cashStream=&page=${pagez}`,
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
          success(JSON.parse(text), pagez);
        } else {
          // console.log("failed", text);
          Object.entries(JSON.parse(text)).forEach(([key, value])=>{
            fail(`${key}: ${value}`);
            // console.log('faillllled')
          });
        }
      }else{
        // console.log('fetching cashflow data')
        // fetching cashflow data
        const response = await fetch(
          `${backendURL}/backend_Ledger/cashflow/filter/period?start_date=${start_date}&end_date=${end_date}&date_range=&category=${filterCategory}&cashStream=&page=${pagez}`,
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
          success(JSON.parse(text), pagez);
        } else {
          // console.log("failed", text);
          Object.entries(JSON.parse(text)).forEach(([key, value])=>{
            fail(`${key}: ${value}`);
            // console.log('faillllled')
          });
        }
      }
    }
  }

  verifyTokens(access, set_access, success_Status)
  
  success_Status()
};

export const delete_cashFlow = async (flowId, success, access, set_access) => {
  
  const success_Status = async(status, access_token) => {
    if (status  === 200){
      // fetching cashflow data
      const response = await fetch(
        `${backendURL}/backend_Ledger/cashflow/${flowId}/delete/`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/JSON',
                'Authorization': `Bearer ${access_token}`,
            }
        }
    );
  const text = await response.text();
  if (response.status === 401) {
    // console.log("accesstoken not valid");
    alert("you are not authorized to delete this data")
    return [];
  }
  if (response.status === 204) {
    // console.log("deleted", text);
    success()
  } else {
    // console.log("failed to delete", text);
  }
    }
  }

  verifyTokens(access, set_access, success_Status)
  
  success_Status()
};

export const create_cashFlow = async (description, selectd_Streamm, credit, debit, categorySelected, success, access, set_access) => {
  
  const success_Status = async(status, access_token) => {
    if (status  === 200){
      // creating cashflow data
      const response = await fetch(
        `${backendURL}/backend_Ledger/cashflow/`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
          },
          body: JSON.stringify({
            "description": description,
            "cashStream": selectd_Streamm,
            "Credit": credit.replace(/[$]|,/g,""),
            "Debit": debit.replace(/[$]|,/g,""),
            "category": categorySelected,
          }),
        }
      );
        
      const text = await response.text();
      if (response.status === 401) {
        // console.log("accesstoken not valid");
        alert("you are not authorized to create this data")
        return [];
      }
      if (response.status === 201) {
        // console.log("data created", text);
        success()
      } else {
        // console.log("failed to create", text);
      }
    }
  }

  verifyTokens(access, set_access, success_Status)
  
  success_Status()
};

export const get_edit_cashFlow = async (flowId, success, fail, access, set_access) => {
  const success_Status = async(status, access_token) => {
    if (status  === 200){
      // fetching cashflow data
      const response = await fetch(
        `${backendURL}/backend_Ledger/cashflow/${flowId}`,
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
        success(text);
      } else {
        // console.log("failed", text);
        Object.entries(JSON.parse(text)).forEach(([key, value])=>{
        fail(`${key}: ${value}`);
      });
      }
    }
  }

  verifyTokens(access, set_access, success_Status)
  
  success_Status()
};

export const edit_cashFlow = async (flowId, description, selectd_Streamm, credit, debit, categorySelected, success, access, set_access) => {
  
  const success_Status = async(status, access_token) => {
    if (status  === 200){
      // creating cashflow data
      const response = await fetch(
        `${backendURL}/backend_Ledger/cashflow/${flowId}/update/`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
          },
          body: JSON.stringify({
            "description": description,
            "cashStream": selectd_Streamm,
            "Credit": credit.replace(/[$]|,/g,""),
            "Debit": debit.replace(/[$]|,/g,""),
            "category": categorySelected,
          }),
        }
      );
        
      const text = await response.text();
      if (response.status === 401) {
        // console.log("accesstoken not valid");
        alert("you are not authorized to create this data")
        return [];
      }
      if (response.status === 200||201) {
        // console.log("data created", text);
        success()
      } else {
        // console.log("failed to create", text);
      }
    }
  }

  verifyTokens(access, set_access, success_Status)
  
  success_Status()
};


