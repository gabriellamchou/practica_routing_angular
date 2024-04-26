import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: {id: number, name: string};

  /**
   * ActivatedRoute nos dará acceso a la ruta actual
   */
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /**
     * Asignamos al user el :id y el :name que pasamos por la ruta
     * gracias a la propiedad route que nos ofrece ActivatedRoute
     */
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    /**
     * route.params es un observable al que podemos suscribirnos, esto es
     * cuando el objeto (la ruta) reciba algún cambio (nuevos parámetros),
     * se ejecutará el código dentro de subscribe()
     */
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'],
          this.user.name = params['name'];
        }
      );
  }

}
