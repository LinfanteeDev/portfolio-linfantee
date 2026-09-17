import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  // Variables de estado
  isDarkMode = false;
  currentLang = 'es';

  // Función para alternar el modo oscuro
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    // Le añadimos o quitamos la clase 'dark-theme' al body de toda la página
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  // Función para cambiar de idioma
  changeLang(lang: string) {
    this.currentLang = lang;
    // Más adelante conectaremos esto con los textos para que se traduzcan
  }
}