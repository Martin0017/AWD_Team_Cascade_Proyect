import { BASE_PATH, API_VERSION} from './config'

export function sign_up_api(data){
  const url = `${BASE_PATH}/${API_VERSION}/sign_up`
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers:{
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params).then(response => {
    return response.json();
  }).then(result => {
    if(result.user){
      return{
        ok: true,
        message: "Usuario creado correctamente"
      };
    }
    return {ok: false, message: result.message};
  }).catch(err =>{
    return {ok: false, message: err.message}
  });
}

export function sign_in_api(data){
  
  const url = `${BASE_PATH}/${API_VERSION}/sign_in`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
  .then( response => {
    return response.json();
  })
  .then(result => {
    localStorage.setItem("email", data.email);
    return result;
  })
  .catch(err => {
    return err.message;
  });
}