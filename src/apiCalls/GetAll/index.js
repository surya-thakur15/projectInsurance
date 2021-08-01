import endpoints from "../../configs/endpoints"

let url = endpoints[endpoints.env];

let GetAll = async function () {
  var requestOptions = {
    method: 'GET'
  };
  var uri = `${url.root}${url.getAll}`;
  console.log("URI: ", uri);
  return await fetch(uri, requestOptions)
}

export default GetAll;
