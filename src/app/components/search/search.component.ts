import { Component } from '@angular/core';
import { setSearchTarm } from '../../services/varibals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private router: Router) {}
  searchTerm: string = '';

  onSearch() {
    // Handle search logic here
    setSearchTarm(this.searchTerm);
    this.router.navigate(['/gallery']);
  }
}
