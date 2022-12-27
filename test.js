const config=require('config')
function run(params) {
    console.log('token',config.get('ULAMA_JSON_WEB_TOKEN'))  
}

run()