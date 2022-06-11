const register_api = async (email, password, first_name, last_name, success, fail) => {
  const response = await fetch(
        `http://127.0.0.1:8000/user/register/`,
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
    console.log("success", JSON.parse(text));
    success(JSON.parse(text));
    
  } else {
    console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value])=>{
      fail(`${key}: ${value}`);
    });
  }
};

export default register_api;
