import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    /**
     * Convertimos id a number con '+', ya que snapshot.params lo devuelve
     * como string y eso nos da problemas para usar getServer
     */
    /**
     * Esta función la lleva a cabo el server-resolver
     */
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id)!;
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id'])!;
    //     }
    //   )
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    // this.router.navigate(['/server', this.server.id, 'edit']);
  }

}
