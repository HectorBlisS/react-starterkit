/**
 * Created by BlisS on 05/04/17.
 */
import 'whatwg-fetch';

//User CRUD -- GETs

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(url)
    .then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}

