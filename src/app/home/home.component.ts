import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Inyectamos Router
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  // con .navigate redirigimos al usuario
  onLoadServers(id: number) {
    // complex calculation
    /**
     * Como primer arg podemos incluir una ruta con varios niveles usando un array
     * Con queryParams definimos los parámetros de la ruta (?)
     * Con fragment podemos añadirle un fragmento final (#)
     */
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'})
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
