import {backendURL} from "../../../../backendURL"

const login_api = async (path, email, password, success, fail) => {
  const response = await fetch(
        `${backendURL}/user/login/`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": email,
              "password": password,
            }),
            cache: 'default', // *default, no-cache, reload, force-cache, only-
            // credentials: "same-origin"
            credentials: "include"
        }
    );
  const text = await response.text();
  if (response.status === 200) {
    // console.log("success", JSON.parse(text));
    success(JSON.parse(text), path);
  } else {
    console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value])=>{
      fail(`${key}: ${value}`);
    });
  }
};

export default login_api