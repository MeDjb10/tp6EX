import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/classes/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-selected-livre',
  templateUrl: './selected-livre.component.html',
  styleUrls: ['./selected-livre.component.css'],
})
export class SelectedLivreComponent {
  public livre!: Livre | undefined;

  constructor(
    private livreService: LivreService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.livre = this.livreService.getLivreById(id);
  }

  public onRetour() {
    this.router.navigate(['livres']);
  }
}
