import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BeerListService } from '../beer-list.service';

@Component({
  selector: 'app-beer-popup-details',
  templateUrl: './beer-popup-details.component.html',
  styleUrls: ['./beer-popup-details.component.css']
})
export class BeerPopupDetailsComponent implements OnInit {
  similarBeers: any[];
  numSimilarBeers = 3;
  difference = 2;
  isLoading = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private beerListService: BeerListService) { }

  ngOnInit() {
    this.showSimilarBeers();
  }

  private showSimilarBeers() {
    const ibu = parseInt(this.data.selectedBeer.ibu, 10);
    const abv = parseInt(this.data.selectedBeer.abv, 10);
    const ebc = parseInt(this.data.selectedBeer.ebc, 10);
    if (ibu && abv && ebc) {
      this.beerListService.getSimilarBeer(ibu, abv, ebc, this.difference).subscribe(
        data => setTimeout(() => {
          this.similarBeers = data.filter(beer => beer.id !== this.data.selectedBeer.id).slice(0, this.numSimilarBeers);
          this.isLoading = false;
        }, 0),
        err => {
          console.error(err);
        });
    }
  }

}
