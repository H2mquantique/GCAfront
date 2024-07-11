import { Component, OnInit, Input } from '@angular/core';
import { AudienceService } from '../services/audience.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affaire-audiences',
  templateUrl: './affaire-audiences.component.html',
  styleUrls: ['./affaire-audiences.component.css']
})
export class AffaireAudiencesComponent implements OnInit {
  @Input() affaireId: number;
  audiences: any[] = [];
  newAudience: any = {};
  selectedAudience: any = null;

  constructor(private audienceService: AudienceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.affaireId = +params['affaireId'];
      if (this.affaireId) {
        this.loadAudiences(this.affaireId);
      } else {
        console.error('L\'identifiant de l\'affaire est indéfini ou nul.');
      }
    });
  }

  loadAudiences(affaireId: number) {
    this.audienceService.getAudiencesByAffaireId(affaireId).subscribe(
      (data: any[]) => {
        this.audiences = data;
      },
      error => {
        console.error('Erreur lors du chargement des audiences:', error);
      }
    );
  }

  addAudience() {
    this.newAudience.affaire = { id: this.affaireId };
    this.audienceService.addAudience(this.newAudience).subscribe(
      () => {
        this.loadAudiences(this.affaireId);
        this.newAudience = {};
      },
      error => {
        console.error('Erreur lors de l\'ajout d\'une audience:', error);
      }
    );
  }

  selectAudience(audience: any) {
    this.selectedAudience = { ...audience };
  }

  updateAudience(): void {
    if (this.selectedAudience) {
      this.audienceService.updateAudience(this.selectedAudience.id, this.selectedAudience)
        .subscribe({
          next: () => {
            console.log("Audience mise à jour avec succès");
            this.loadAudiences(this.affaireId);
            this.selectedAudience = null;
          },
          error: (error: any) => {
            console.error("Erreur lors de la mise à jour d'une audience:", error);
          }
        });
    }
  }

  deleteAudience(id: number) {
    this.audienceService.deleteAudience(id).subscribe(
      () => {
        this.loadAudiences(this.affaireId);
      },
      error => {
        console.error('Erreur lors de la suppression d\'une audience:', error);
      }
    );
  }
}
