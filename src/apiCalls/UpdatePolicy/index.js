import endpoints from "../../configs/endpoints"
let url = endpoints[endpoints.env];

let UpdatePolicy = async function (bodyObj) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(
    bodyObj
  );

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw
  };
  
  return await fetch(`${url.root}${url.updatePolicy}`, requestOptions)
}

export default UpdatePolicy;

