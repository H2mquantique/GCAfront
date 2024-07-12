import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];
  newClient: any = {};
  editClient: any = {};
  isEditing: boolean = false;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    });
  }

  addClient(): void {
    this.clientService.createClient(this.newClient).subscribe(() => {
      this.loadClients();
      this.newClient = {};
    });
  }

  editClientInit(client: any): void {
    this.isEditing = true;
    this.editClient = { ...client };
  }

  updateClient(): void {
    this.clientService.updateClient(this.editClient.id, this.editClient).subscribe(() => {
      this.loadClients();
      this.isEditing = false;
      this.editClient = {};
    });
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.loadClients();
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editClient = {};
  }
}
