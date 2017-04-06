import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import colors from 'colors';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err){
  if (err){
    return console.log(err.red);
  } else {
    console.log("Mock data generated".green);
  }
});
