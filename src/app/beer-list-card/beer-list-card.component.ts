import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BeerPopupDetailsComponent } from '../beer-popup-details/beer-popup-details.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-list-card',
  templateUrl: './beer-list-card.component.html',
  styleUrls: ['./beer-list-card.component.css']
})

export class BeerListCardComponent implements OnInit {
  @Input() beer: any[];
  beerDetails: any = {};
  isActive = false;

  constructor(public dialog: MatDialog, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    if (this.beer) {
      this.beerDetails = this.beer[0];
      this.activeRoute.params.subscribe( params => setTimeout(() => {
        if (params.id && Number(params.id) === this.beerDetails.id) {
          this.openDialog();
        }
      }, 0));
    }
  }

  public openDialog() {
    this.dialog.closeAll();
    this.dialog.open(BeerPopupDetailsComponent, {
      data: {
        selectedBeer: this.beerDetails
      }
    });
  }

}
