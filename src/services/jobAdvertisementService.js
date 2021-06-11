import axios from "axios"


export default class jobAdvertisementService  {
   getJobAdvertisementList(){
       return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
   }
}