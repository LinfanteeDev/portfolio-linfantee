import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './content.html',
  styleUrls: ['./content.scss']
})
export class Content {
  
  // ==========================================
  // LÓGICA DE PROYECTOS Y EXPERIENCIA
  // ==========================================
  
  // Variables para controlar el buscador y los filtros
  searchText: string = '';
  activeFilter: string = 'Todos';
  sortBy: string = 'Más recientes';
  isSortDropdownOpen: boolean = false;

  // Botones de categorías
  categories: string[] = ['Todos', 'HTML/CSS/JS', 'Angular', 'Java', 'Node.js'];
  // Opciones de ordenación
  sortOptions: string[] = ['Más recientes', 'Más antiguos', 'A - Z', 'Z - A'];

  // Tu lista de proyectos
  projects = [
    {
      title: 'Portfolio web',
      date: 'Iniciado en Junio 2026', 
      description: 'Mi portfolio personal, diseñado y desarrollado desde cero como un proyecto vivo que refleja mi evolución como desarrollador Full-Stack. El frontend está construido con HTML, CSS y JavaScript Vanilla, implementando una arquitectura modular con soporte multi-idioma...',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Vercel', 'Node', 'SonarQube', 'Docker', 'API', 'CI/CD'],
      image: '/Portfolio.Foto.png', 
      githubUrl: 'https://github.com/LinfanteeDev/portfolio-linfantee',
      dateValue: new Date('2026-06-01') // Fecha interna para poder ordenar
    },
    // Aquí añadiremos el resto de tus proyectos luego
  ];

  // Función "inteligente" que filtra y ordena la lista en tiempo real
  get filteredProjects() {
    let result = this.projects;

    // 1. Filtrar por lo que escribas en el buscador
    if (this.searchText) {
      const text = this.searchText.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(text) || 
        p.description.toLowerCase().includes(text) ||
        p.tags.some(tag => tag.toLowerCase().includes(text))
      );
    }

    // 2. Filtrar por la píldora azul seleccionada
    if (this.activeFilter !== 'Todos') {
      result = result.filter(p => p.tags.includes(this.activeFilter) || p.tags.includes(this.activeFilter.split('/')[0]));
    }

    // 3. Ordenar la lista según el desplegable
    if (this.sortBy === 'A - Z') {
      result = result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortBy === 'Z - A') {
      result = result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (this.sortBy === 'Más recientes') {
      result = result.sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime());
    } else if (this.sortBy === 'Más antiguos') {
      result = result.sort((a, b) => a.dateValue.getTime() - b.dateValue.getTime());
    }

    return result;
  }

  // Funciones de interacción
  setFilter(category: string) {
    this.activeFilter = category;
  }

  toggleSortDropdown() {
    this.isSortDropdownOpen = !this.isSortDropdownOpen;
  }

  setSortOrder(option: string) {
    this.sortBy = option;
    this.isSortDropdownOpen = false;
  }
  // ... (Aquí termina tu bloque de projects) ...

  // ==========================================
  // EXPERIENCIA LABORAL
  // ==========================================
  experiences = [
    {
      company: 'Texla Renovables',
      role: 'Desarrollador Web en Prácticas',
      date: 'Febrero 2026 - Junio 2026',
      logo: '/texlaR.Foto.jpeg',
      description: 'Administración general y soporte técnico de sistemas. Desarrollo de funcionalidades e interfaces web mediante Google Apps Script para optimizar la gestión. Implementación de un sistema de control de jornada en la aplicación de fichajes automatizando el cierre de sesión. Creación de un panel web de seguridad con autorización por código para supervisores y mejora de la aplicación de gestión de flota de vehículos.'
    },
    {
      company: 'Reyes Mendes,C.B',
      role: 'Distribuidor y Atención al Cliente',
      date: 'Veranos 2024 y 2025',
      logo: 'https://ui-avatars.com/api/?name=Reyes+Mendes&background=e9ecef&color=333&size=100&bold=true',
      description: 'Gestión eficiente de inventario, seguimiento de pedidos y trato directo con clientes en puntos de venta y eventos.'
    }
  ];

}
