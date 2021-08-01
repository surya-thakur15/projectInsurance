import endpoints from "../../configs/endpoints"
let url = endpoints[endpoints.env];

let GetGraph = async function (month, region) {
  var requestOptions = {
    method: 'GET',
  };
  
  var uri = `${url.root}${url.getGraph}?month=${month}&region=${region}`;
  return await fetch(uri, requestOptions)
}

export default GetGraph;
