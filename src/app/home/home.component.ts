import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Inyectamos Router
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // con .navigate redirigimos al usuario
  onLoadServers() {
    // complex calculation
    this.router.navigate(['/servers'])
  }

}
