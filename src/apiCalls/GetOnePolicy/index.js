import endpoints from "../../configs/endpoints"
let url = endpoints[endpoints.env];

let GetOnePolicy = async function (id) {
  var requestOptions = {
    method: 'GET'
  };
  var uri = `${url.root}${url.getOne}/${id}`;
  return await fetch(uri, requestOptions)
}

export default GetOnePolicy;
