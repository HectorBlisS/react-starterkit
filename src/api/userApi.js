/**
 * Created by BlisS on 05/04/17.
 */
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';


const baseUrl = getBaseUrl();

//User CRUD -- GETs

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(baseUrl + url)
    .then(onSuccess, onError);
}


// DELETE post

export function deleteUser(id) {
  return del(`users/${id}`);
}

function del(url){
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request)
    .then(onSuccess, onError);
}


// defaults:

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}



