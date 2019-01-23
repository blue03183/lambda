// 미연동 운송장 조회 URL 호출.
var rp = require('request-promise');

exports.handler = async (event) => {

  rp('https://api.playauto.io/api/settings/checkInvoiceRegist');
  
  const response = {
      statusCode: 200,
      body: JSON.stringify('OK'),
  };
  return response;
};
