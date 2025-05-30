import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit ,OnDestroy{

  products:any[]=[];
  role!:string|null;

  constructor (private service:HttpService,
    private router:Router
  ){}
  ngOnDestroy(): void {
    this.role=null;
  }
  ngOnInit(): void {
   this.getDataFromBackend();
   this.role=sessionStorage.getItem("role");
  }

  getDataFromBackend(){
    this.service.getProductData()
    .subscribe((response:any)=>{
      console.log(response)
      this.products=response
    })
  }

  onUpdate(id:any){
    this.router.navigate(['/updateProduct',id])

  }
  onDelete(id:any){
    this.service.deleteData(id)
    .subscribe((response)=>{
      console.log(response);
      this.getDataFromBackend()
    })


  }




//   products = [
//     {
//       id:1,
//       name: 'Product 1',
//       price: 499,
//       rating: 4,
//       description: 'This is a short description for product 1.',
//       image: 'assets/images/product1.jpg',
//       discountPrice: 120,
//     },
//     {
//       id:2,
//       name: 'Product 2',
//       price: 999,
//       rating: 5,
//       description: 'This is a short description for product 2.',
//       image: 'assets/images/product2.jpg',
//       discountPrice: 120,
//     },
//     {
//       id:3,
//       name: 'Product 3',
//       price: 699,
//       rating: 3,
//       description: 'This is a short description for product 3.',
//       image: 'assets/images/product3.jpg',
//       discountPrice: 120,
//     },
//     {
//       id:4,
//       name: 'Product 4',
//       price: 899,
//       rating: 4,
//       description: 'This is a short description for product 4.',
//       image: 'assets/images/product4.png',
//       discountPrice: 120,
//     },
//     {
//       id:5,
//       name: 'Product 5',
//       price: 899,
//       rating: 4,
//       description: 'This is a short description for product 4.',
//       image: 'assets/images/product5.webp',
//       discountPrice: 120,
//     },
//     {
//       id:6,
//       name: 'Product 5',
//       price: 899,
//       rating: 4,
//       description: 'This is a short description for product 4.',
//       image: 'assets/images/product5.webp',
//       discountPrice: 120,
//     },
//     {
//       id:7,
//       name: 'Product 5',
//       price: 899,
//       rating: 4,
//       description: 'This is a short description for product 4.',
//       image: 'assets/images/product5.webp',
//       discountPrice: 120,
//     }
//   ];

  onAddToCart(item:any){

  }

}
