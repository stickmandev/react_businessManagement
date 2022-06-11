const get_cashStream = async (pageNo="", success, fail) => {
    const old_accesstoken = await localStorage.getItem("accessToken");
    const refreshtoken = await localStorage.getItem("refreshToken");
    
    // Verifying access token___________________________________________________________________________________
    const verify_access_token = await fetch(
      `/api/token/verify/`,
      {
          method: 'POST',
          headers: {
              'Accept': 'Application/JSON',
              'Content-Type': 'Application/json',
          },
          body: JSON.stringify({
            "token": old_accesstoken,
          })
      }
    );
  
    if (verify_access_token.status === 401) {
      const get_access_token = await fetch(
        `/api/token/refresh/`,
        {
            method: 'POST',
            headers: {
                'Accept': 'Application/JSON',
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
              "refresh": refreshtoken,
            })
        }
      );
  
      const new_accesstoken = JSON.parse(await get_access_token.text()).access;
      
      if (get_access_token.status === 200) {
        await localStorage.removeItem('accessToken');
        await localStorage.setItem("accessToken", new_accesstoken);
      }
  
      // console.log("new_accesstoken :" + new_accesstoken)
  
    };
    
    const accesstoken = await localStorage.getItem("accessToken");
    
  
    // Verifying refresh token__________________________________________________________________________________
    const verify_refresh_token = await fetch(
      `/api/token/verify/`,
      {
          method: 'POST',
          headers: {
              'Accept': 'Application/JSON',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "token": refreshtoken,
          })
      }
    );
  
    if (verify_refresh_token.status === 401) {
      alert("session expired, please log in again")
      window.location.assign("/index/login/");
    }
  
  
    //validating access token___________________________________________________________________________________ 
    if (accesstoken === null) {
      console.log("No credentials found, redirecting...");
      window.location = "/index/login/";
      return [];
    }
  
    // fetching cashstream data
    const response = await fetch(
          `/ledger/cashstream/`,
          {
              method: 'GET',
              headers: {
                  'Content-Type': 'Application/JSON',
                  'Authorization': `Bearer ${accesstoken}`,
              }
          }
      );
    const text = await response.text();
    if (response.status === 401) {
      console.log("accesstoken not valid");
      alert("you are not authorized to view this page")
      window.location.assign("/index/login/");
  
      return [];
    }
    if (response.status === 200) {
      console.log("success", JSON.parse(text));
      success(JSON.parse(text));
    } else {
      console.log("failed", text);
      Object.entries(JSON.parse(text)).forEach(([key, value])=>{
        fail(`${key}: ${value}`);
      });
    }
  };
