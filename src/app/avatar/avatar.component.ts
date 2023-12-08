import { Component, Renderer2 } from '@angular/core';

interface Image {
  src: string;
  alt: string;
  selected: boolean;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  images: Image[] = [
    { src: 'assets/image/image11.jpg', alt: 'Image 11', selected: false },
    { src: 'assets/image/image13.jpg', alt: 'Image 13', selected: false },
    { src: 'assets/image/image15.jpg', alt: 'Image 15', selected: false },
    { src: 'assets/image/image14.jpg', alt: 'Image 14', selected: false },   
  ];

  selectedImage: Image | undefined;

  constructor(private renderer: Renderer2) {}

  showPopup() {
    const popup = document.getElementById('imagePopup');
    if (popup) {
      popup.style.display = 'block';
    }
  }

  closePopup() {
    const popup = document.getElementById('imagePopup');
    if (popup) {
      popup.style.display = 'none';
    }
  }

  validateSelection() {
    if (this.selectedImage) {
      // Set the selected image as the background
      document.body.style.backgroundImage = `url(${this.selectedImage.src})`;
      document.body.style.backgroundSize = 'cover'; // Cover the entire viewport
      document.body.style.backgroundRepeat = 'no-repeat'; // Do not repeat the image

      // Close the popup
      this.closePopup();

      // Add your additional processing logic here

      console.log('Image sélectionnée:', this.selectedImage);
    } else {
      alert('Veuillez sélectionner une image avant de valider.');
    }
  }
}