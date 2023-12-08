import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMycomponentService {

  constructor() { }

  searchBar( BottonColor?:string ){   
    return `
    <style>
    .search-bar {
        display: flex;
        align-items: center;
      }
      
      input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 4px;
      }
      
      button {
        padding: 8px;
        background-color: ${BottonColor};
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
</style>
    <div class="search-bar" [ngStyle]="searchBarStyles">
  <input [ngStyle]="inputStyles" type="text" placeholder="Search...">
  <button [ngStyle]="buttonStyles"><i class="fa fa-search"></i></button>
</div>
    `
}
navbarElement(){
  return `
  <style>
  .nav-list {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-list li {
    padding: 0;
  }
  
  .nav-list a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .nav-list a:hover {
    color: #ffd700; /* Change the color on hover */
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }</style>
  <div class="container">
    <ul class="nav-list">
      <li><a href="#home">nouvelle </a></li>
      <li><a href="#about">faits </a></li>
      <li><a href="#services">fausses nouvelles</a></li>
      <li><a href="#contact">plus</a></li>
    </ul>
  </div>
  `
}
avatar(){
  return `
  <style>
  .profile-container {
    text-align: center;
  }
  .profile-picture {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    border: 4px solid #fff; /* Border color */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle box shadow */
    margin: 0 auto 20px; /* Adjust margin as needed */
  }
  
  .profile-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  <div class="profile-container">
  <div class="profile-picture">
  <img src="assets/image/sourire.png" height="30" width="30"> 
  </div>
  <h2>Aymen</h2>
</div>
  `
}

logo(){
  return `
  <style>
.logo h1 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}
.logo {
  text-transform: uppercase;
  letter-spacing: 2px;
  color: red; 
}

</style>
  <header>
    <h1 class="site-title">Your Website</h1>
    <p class="site-description">A brief description of your website.</p>
  </header>
  `

}





}
