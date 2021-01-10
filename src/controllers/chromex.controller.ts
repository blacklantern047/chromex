let request = require('request');
const axios = require('axios').default;
import {get, RestBindings, param, requestBody, post} from '@loopback/rest';
export class GoCarReviewController {
    constructor() {
    }
    @get('chromex/wallpaper')
    async wallpaper(){
        let finalUrl: string = "https://images5.alphacoders.com/587/587597.jpg";
        let randomNumber: number = Math.floor(Math.random() * 184980) + 1;
        let pageNumber: number = randomNumber/30 + 1;
        let wallpaperNumber = Math.floor(Math.random() * 30) + 1;
        await axios.get(`https://wall.alphacoders.com/api2.0/get.php?auth=1e3c6bcb559b151f8ddde6299f755938&method=category&id=3&page=${pageNumber}`)
            .then(function (response: any) {
                // handle success
                if(response.data && response.data.success && response.data.wallpapers && response.data.wallpapers[wallpaperNumber] && response.data.wallpapers[wallpaperNumber].url_image){
                    finalUrl = response.data.wallpapers[wallpaperNumber].url_image;
                }
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
        return finalUrl;
    }
}