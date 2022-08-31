import {backendURL} from "../../../../backendURL"

const userVerification_api = async (code, success, fail,) => {
  const response = await fetch(`${backendURL}/authemail/signup/verify/?code=${code}`);
  
  const text = await response.text();
  
  if (response.status === 200) {
    console.log("Verified", JSON.parse(text));
    success(text);
  } else {
    console.log("failed to Verify", text);
    Object.entries(JSON.parse(text)).forEach(([key, value])=>{
      fail(`${key}: ${value}`);
    });
  }
};

export default userVerification_api