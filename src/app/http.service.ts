import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:String="http://localhost:8080/api/";
  userBaseUrl:String="http://localhost:8080/user/"
 
  constructor(private http:HttpClient) { }

  getProductData(){
    return(this.http.get(`${this.baseUrl}get-all`));
  }

  sigupUser(obj:any){

    return ( this.http.post(`${this.userBaseUrl}register`,obj,{
      responseType:'text'
    }) );
  }

  login(obj:any){
    return (this.http.post(`${this.baseUrl}auth/login`,obj))
   }


   PostProductData(productObj:any,image:File){
    const formData=new FormData();
    formData.append("product",JSON.stringify(productObj));
    formData.append("image",image);
   
   return this.http.post(`${this.baseUrl}create`,formData,{
      responseType:"text"
    });
  }


  deleteData(id:any){
   return ( this.http.delete(`${this.baseUrl}delete/${id}`,{
    responseType:"text"
   }) );
  }

  getParticularDataById(id:any){
    return this.http.get(`${this.baseUrl}get/${id}`)
  }

  updateProductData(productobj:any,image:File){
    const formData = new FormData();
    formData.append("product",JSON.stringify(productobj));
    formData.append("image",image);

    return this.http.put(`${this.baseUrl}update`,formData,{
      responseType:"text"
    });
  }


}
