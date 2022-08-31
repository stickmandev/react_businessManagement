import {backendURL} from "../../../../backendURL"

const register_api = async (email, password, first_name, last_name, success, failed) => {
  const response = await fetch(
        `${backendURL}/user/register/`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": email,
              "password": password,
              "first_name": first_name,
              "last_name": last_name,
            })
        }
    );
  const text = await response.text();
  if (response.status === 201) {
    // console.log("success", JSON.parse(text));
    success(JSON.parse(text));
    
  } else {
    // console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value])=>{
      failed(`${key}: ${value}`);
    });
  }
};

export default register_api;
