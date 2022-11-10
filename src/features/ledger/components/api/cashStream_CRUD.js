import {verifyTokens} from "../../../auths/verifyTokens"
import {backendURL} from "../../../../backendURL"


export const get_cashStream = async (pageNo="", streamFilter, success, fail, access, set_access) => {
  console.log(streamFilter.toString().replace(/,/g,""))

  const success_Status = async(status, access_token) => {
    if (status  === 200){
      if(streamFilter===''){
        const response = await fetch(
          `${backendURL}/backend_Ledger/cashstream/`,
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
          success(JSON.parse(text));
        } else {
          // console.log("failed", text);
          Object.entries(JSON.parse(text)).forEach(([key, value])=>{
            fail(`${key}: ${value}`);
          });
        }
      }else{
        const response = await fetch(
          `${backendURL}/backend_Ledger/cashstream/?${streamFilter.toString().replace(/,/g,"")}`,
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
          success(JSON.parse(text));
        } else {
          // console.log("failed", text);
          Object.entries(JSON.parse(text)).forEach(([key, value])=>{
            fail(`${key}: ${value}`);
          });
        }
      }
    }
  }

    verifyTokens(access, set_access, success_Status)

    success_Status()
};
