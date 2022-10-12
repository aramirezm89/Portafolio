import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  data: any[] = [
    {
      previewImageSrc: '../assets/certificados/titulo.jpg',
      thumbnailImageSrc: '../assets/certificados/titulo.jpg',
      alt: 'Titulo',
      title: 'Titlo profesional',
    },

    {
      previewImageSrc:
        '../assets/certificados/UC-1f393ea6-6fa7-4c85-a757-e24df6b219c4.jpg',
      thumbnailImageSrc:
        '../assets/certificados/UC-1f393ea6-6fa7-4c85-a757-e24df6b219c4.jpg',
      alt: 'Angular avanzado',
      title: 'Angular Avanzado',
    },
    {
      previewImageSrc: '../assets/certificados/AngularAvanzado.jpg',
      thumbnailImageSrc: '../assets/certificados/AngularAvanzado.jpg',
      alt: 'Angular 0 experto',
      title: 'Angular de 0 a experto',
    },
    {
      previewImageSrc: '../../assets/certificados/react-net.jpg',
      thumbnailImageSrc: '../../assets/certificados/react-net.jpg',
      alt: 'React .NET',
      title: 'React 17 y ASP.NET Core 5',
    },
    {
      previewImageSrc: '../assets/certificados/asp.net5.jpg',
      thumbnailImageSrc: '../assets/certificados/asp.net5.jpg',
      alt: 'Curso ASP .NET',
      title: 'Guia Completa ASP .NET Core',
    },
    {
      previewImageSrc: '../assets/certificados/linq.jpg',
      thumbnailImageSrc: '../assets/certificados/linq.jpg',
      alt: 'Linq',
      title: 'Linq',
    },
  ];
  constructor() {}
}
