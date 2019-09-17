import axios from "axios";
import _ from 'lodash';

export async function getPrice(vegName){
  let url = "https://059d9e5a-c3c4-4d3c-90ec-9982b0773dd6.mock.pstmn.io/prices";
  try{
    let result = await axios.get(url, {
      params: {
        name : vegName
      }
    });
    return _.get(result, "data.data.prices", null);
  }catch(e){
    return null;
  }
}