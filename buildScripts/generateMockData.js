import jsf from 'json-schema-faker';
import {schema} from './mockDataScheme';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => require('faker'));
const json = JSON.stringify(jsf(schema));


fs.writeFile("./src/api/db.json", json, function (err){
  if(err){
    return console.log(chalk.red(err));
  }else{
    return console.log(chalk.green("Mock Data Generated"));
  }
});
