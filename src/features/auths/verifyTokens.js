import {backendURL} from "../../backendURL"

export const verifyTokens = async (old_access, set_Access, success_Status) => {
    
    const refreshtoken =  localStorage.getItem("refreshToken");
    // console.log("verifying tokens......")
    
    // Verifying access token___________________________________________________________________________________
    // console.log("verifying access token......")
    const verify_access_token = await fetch(
      `${backendURL}/user/verifyAccess/`,
      {
          method: 'POST',
          headers: {
              'Accept': 'Application/JSON',
              'Content-Type': 'Application/json',
          },
          body: JSON.stringify({
            access: `${old_access}`,
          })
      }
    );
    // console.log("finished verifying access token")
  
    if (verify_access_token.status === 400 ) {
        // console.log("access token expired......: "+verify_access_token.status)

        // fetching new access and refresh token___________________________________________________________________________________
        // console.log("fetching new access and refresh token......")
        const get_tokens = await fetch(
            `${backendURL}/user/refresh/`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'Application/JSON',
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify({
                    refresh: `${refreshtoken}`,
                })
            }
        );
        const access_text = await get_tokens.text();
        // console.log('finished fetching access and refresh token')

        // console.log(get_tokens.status)
        
        if (get_tokens.status == 200) {
            // console.log("fetching access and refresh token succesful")
            // console.log("setting access and refresh token")
            localStorage.setItem("refreshToken", JSON.parse(access_text).refresh);
            set_Access(JSON.parse(access_text).access)
            // console.log('finished setting tokens')
            await success_Status(get_tokens.status, JSON.parse(access_text).access)
        }

        if (get_tokens.status === (400||401)) {
            // console.log("failed to verify access and refresh token")

            // Verifying refresh token__________________________________________________________________________________
            // console.log('Verifying refresh token....')
            const verify_refresh_token = await fetch(
            `${backendURL}/user/verifyRefresh/`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'Application/JSON',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refresh: `${refreshtoken}`,
                })
            }
            );
            // console.log('finished verifying refresh token')
            
        
            if (verify_refresh_token.status === (401||400)) {
                alert("session expired, please log in again")
                // console.log('redirecting to login')
                window.location.assign("/login");
            }

            if (verify_refresh_token.status === 200) {
                // console.log("refresh token is valid")
            }
      }
  
    };

    if (verify_access_token.status === 200 ) {
        // console.log("access token is valid")
        await success_Status(verify_access_token.status, old_access)
        // console.log('access token verified')
    }
    
}
