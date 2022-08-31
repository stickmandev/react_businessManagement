import {verifyTokens} from "../../../auths/verifyTokens"
import {backendURL} from "../../../../backendURL"


export const get_categories = async ( success, fail, access, set_access) => {
  
  const success_Status = async(status, access_token) => {
    if (status  === 200){
      // fetching cashflow data
      const response = await fetch(
        `${backendURL}/ledger/category/`,
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

  verifyTokens(access, set_access, success_Status)
  
  success_Status()
};

export const create_categories = async (newCategory, success, access, set_access) => {
  
  const success_Status = async(status, access_token) => {
    if (status  === 200){
      // creating cashflow data
      const response = await fetch(
        `${backendURL}/ledger/category/`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
          },
          body: JSON.stringify({
            "name": newCategory,
          }),
        }
      );

      const text = await response.text();
      if (response.status === 401) {
        // console.log("accesstoken not valid");
        alert("you are not authorized to delete this data")
        return [];
      }
      if (response.status === 201) {
        // console.log("data created", text);
        success()
      } else {
        // console.log("failed to delete", text);
      }
    }
  }

  verifyTokens(access, set_access, success_Status)
  
  success_Status()
};

// export const delete_categories = async (flowId, success, access, set_access) => {
  
//   const success_Status = async(status, access_token) => {
//     if (status  === 200){
//       // fetching cashflow data
//       const response = await fetch(
//         `${backendURL}/ledger/cashflow/${flowId}/delete/`,
//         {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'Application/JSON',
//                 'Authorization': `Bearer ${access_token}`,
//             }
//         }
//     );
//   const text = await response.text();
//   if (response.status === 401) {
//     console.log("accesstoken not valid");
//     alert("you are not authorized to delete this data")
//     return [];
//   }
//   if (response.status === 204) {
//     console.log("deleted", text);
//     success()
//   } else {
//     console.log("failed to delete", text);
//   }
//     }
//   }

//   verifyTokens(access, set_access, success_Status)
  
//   success_Status()
// };

