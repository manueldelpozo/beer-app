import { Component, OnInit } from '@angular/core';
import { BeerListService } from '../beer-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent implements OnInit {
  beers: any[];
  beer: any[];
  page = 1;
  beersPerPage = 20;
  isLoading = true;
  isTheEnd = false;

  constructor(private beerListService: BeerListService, private activeRoute: ActivatedRoute) {
    window.addEventListener('scroll', this.onScrollToBottom.bind(this));
  }

  ngOnInit() {
    this.loadPage();
    this.activeRoute.params.subscribe( params => setTimeout(() => {
      if (params.id && Number(params.id) > this.beersPerPage) {
        this.page = Math.ceil(params.id / this.beersPerPage);
        this.loadPage();
      }
    }, 0));
  }

  private onScrollToBottom() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const windowBottom = windowHeight + window.pageYOffset;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight);
    if (windowBottom === docHeight && !this.isLoading && !this.isTheEnd) {
      this.loadMoreBeers();
    }
  }

  private loadMoreBeers() {
    this.isLoading = true;
    this.page++;
    this.loadPage();
  }

  private loadPage() {
    this.beerListService.getList(this.page).subscribe(
      data => {
        if (this.beers && this.beers.length > 0) {
          if (data.length === 0 && this.page > 1) {
            this.isTheEnd = true;
            window.removeEventListener('scroll', this.onScrollToBottom.bind(this));
          }
          this.beers = this.beers.concat(data);
        } else {
          this.beers = data;
        }
        this.isLoading = false;
      },
      err => {
        console.error(err);
      });
  }
}
