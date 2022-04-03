var EventEmitter = require('events');
var fetch = require('node-fetch');

class MyEmitter extends EventEmitter {}
class Manager_jawaker{
	constructor() {
		this.events=new MyEmitter();
	}

	async get_pseudoid_id_and___cf_bm(id,code){
		try{
	 		const response = await fetch("https://www.jawaker.com/ar/m_vouchers/check", {
				  "headers": {
				    "accept": "*/*",
				    "accept-language": "en-US,en;q=0.9",
				    "content-type": "application/x-www-form-urlencoded",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-ch-ua-platform": "\"Windows\"",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-mode": "cors",
				    "sec-fetch-site": "same-origin",
				    "x-csrf-token": "TE6mlYxGZZrnBoUrf4UCOJmIicjywLcQo+0hCd0yRRsrQGrXk6BdXg/7YFVqrufrtBmLz678xEmp53Vx4Fmozw==",
				    "x-newrelic-id": "VwQBWVdACwIJVFFQ",
				    "x-requested-with": "XMLHttpRequest",
				    "cookie": "locale=ar; _ga=GA1.2.5702776.1648064502; _vwo_uuid_v2=D2511C3941B74D0769585BCD788CE7F51|26d8c5fd66bde8dd1f02359f55815598; show_app_overlay=show; _jawaker_session=5dce9db01ebe4a8c560bb4ee3802d47c; _gid=GA1.2.1191549007.1648978968; __cf_bm=V331iaWgTscsNmLAbl2tcna3GnnjPsn.o34_Cj5a9Tk-1648980064-0-Af1lZRB8JsDNRKEZBmU/2T25S6B1pBvRqvtUBvsOagglGfYw/+WMjUJuzpZrRshDGsLvwv7GMAxVQ/VCtQXc/P8=",
				    "Referer": "https://www.jawaker.com/ar/code?fbclid=IwAR3_yDBOUTDNiLeg1ZKBvygj8zOm5ZxS3T3VHFIeIAoUxhO1sQYXwsqs5No",
				    "Referrer-Policy": "strict-origin-when-cross-origin"
				  },
				  "body": `player_number=${id}&pin_code=${code}`,
				  "method": "POST"
				});
	 		var coocies_array=(response.headers.get('set-cookie')).split(";")
			var pseudoid_text_row=coocies_array.filter(text_row=> text_row.includes('pseudoid'))[0]
			var pseudoid_text_array=pseudoid_text_row.split(",")
			var pseudoid_text_row=pseudoid_text_array.filter(text_row=> text_row.includes('pseudoid'))[0]
			var pseudoid=(pseudoid_text_row.split("="))[1];
	 		
	 		var coocies_array=(response.headers.get('set-cookie')).split(";")
			var __cf_bm_text_row=coocies_array.filter(text_row=> text_row.includes('__cf_bm'))[0]
			var __cf_bm_text_array=pseudoid_text_row.split(",")
			var __cf_bm_text_row=pseudoid_text_array.filter(text_row=> text_row.includes('__cf_bm'))[0]
			var __cf_bm=(pseudoid_text_row.split("="))[1];	
			if(!__cf_bm||!pseudoid){return false}
			return {pseudoid,__cf_bm,err:false}
		}catch(err){
			console.log(err)
			return false
		}
	}

	async pay_sycle(id,code){
		try{
			var {pseudoid , __cf_bm}=await this.get_pseudoid_id_and___cf_bm(id,code)
			if(!pseudoid){return {sucssess:false,err:'Error In : pay_sycle',status:'4'}}
	 		const response = await fetch("https://www.jawaker.com/ar/buy/tokens/m_vouchers", {
								"headers": {
								    "accept": "*/*",
								    "accept-language": "en-US,en;q=0.9",
								    "content-type": "application/x-www-form-urlencoded",
								    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
								    "sec-ch-ua-mobile": "?0",
								    "sec-ch-ua-platform": "\"Windows\"",
								    "sec-fetch-dest": "empty",
								    "sec-fetch-mode": "cors",
								    "sec-fetch-site": "same-origin",
								    "x-csrf-token": "1/1/IwmDmqRNwf8NlF5yiFJlu0Y7H01WQ8ypMCfJiT9Axo1L/gWdOM+QSXSoWOhTTvakSBkE6g7ijV2HcKHysA==",
								    "x-newrelic-id": "VwQBWVdACwIJVFFQ",
								    "x-requested-with": "XMLHttpRequest",
								    "cookie": `locale=ar; show_app_overlay=show; _jawaker_session=6a0a28d5e05d15bf32423af2f59b0f2a; __cf_bm=${__cf_bm}; _ga=GA1.2.5702776.1648064502; _gid=GA1.2.711003261.1648064502; _vwo_uuid_v2=D2511C3941B74D0769585BCD788CE7F51|26d8c5fd66bde8dd1f02359f55815598; pseudoid=${pseudoid}`,
								    "Referer": "https://www.jawaker.com/ar/code",
								    "Referrer-Policy": "strict-origin-when-cross-origin"
								},
							  	"body": `player_number=${id}&pin_code=${code}`,
							  	"method": "POST"
							});
			var data= await response.json()
			if(data.error){return {sucssess:false,err:data.error.msg,status:'4'}}
			if(data.msg){
				console.log(data.msg)
				return {sucssess:true,err:false,status:'5'}
			}
			return {sucssess:false,err:'Error In : pay_sycle',status:'4'}
		}catch(err){
			console.log(err)
			return {sucssess:false,err:'Error In : pay_sycle',status:'4'}
		}
	}
 	delay(time){
		return new Promise((res,rej)=>{
			setTimeout(()=>{res()},time)
		})
	}
}



module.exports= new Manager_jawaker




