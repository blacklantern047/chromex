let request = require('request');
const axios = require('axios').default;
import {get, RestBindings, param, requestBody, post} from '@loopback/rest';
export class GoCarReviewController {
    constructor() {
    }
    @get('chromex/wallpaper')
    async wallpaper(){
        let finalResponse: any;
        await axios.get("https://wall.alphacoders.com/api2.0/get.php?auth=1e3c6bcb559b151f8ddde6299f755938&method=category&id=3")
            .then(function (response: any) {
                // handle success
                finalResponse = response.data;
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
        return finalResponse;
        // let url = "https://wall.alphacoders.com/api2.0/get.php?auth=1e3c6bcb559b151f8ddde6299f755938&method=category&id=3";
        // let requestParams: any = {url: url, json: true, time: true, timeout: 1000, pool: {maxSockets: 100}};
        // let apiResponse: any = (requestParams: any) => {
        //     return new Promise(
        //         (resolve, reject) => {
        //             request.get(requestParams, function (error: any, response: any, responseJson:any) {
        //                 if(error || !response || response.statusCode !== 200) {
        //                     console.log(error);
        //                     let err = new Error();
        //                     err.message = "Error from wallpapers api";
        //                     resolve({"status": false, "error": err});
        //                 }
        //                 else if (!responseJson) {
        //                     let err= new Error();
        //                     err.message = "Not a valid json";
        //                     resolve({"status": false, "error": err});
        //                 }
        //                 else{
        //                     resolve(responseJson);
        //                 }
        //             })
        //         }
        //     );
        // };
        // let responseObj: any = await apiResponse(requestParams);
        // return responseObj;
    }
}