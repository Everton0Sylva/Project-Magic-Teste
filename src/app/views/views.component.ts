import { Component, inject } from '@angular/core';
import { ApirequestService } from '../services/apirequest.service';
import { NgxUiLoaderConfig, NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { Booster } from '../model/booster';
import { Card } from '../model/card';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {

  apirequestService = inject(ApirequestService);
  ngxUiLoaderService = inject(NgxUiLoaderService);

  public spinner: any;

  public currentSearch =
    {
      Block: "",
      Name: ""
    };

  public listCards: Array<Card>;
  public listBoosters: Array<Booster>;

  public currentStep: number = 0;

  constructor() {
    this.listCards = new Array<Card>();
    this.listBoosters = new Array<Booster>();


    this.spinner = SPINNER.cubeGrid;
  }

  onSearch() {
    this.ngxUiLoaderService.start();
    this.apirequestService.Sets(this.currentSearch.Name, this.currentSearch.Block).then((data: any) => {
      this.listBoosters = data.sets.map((dataset: any) => {
        let boost: Booster = {
          Code: dataset.code,
          Name: dataset.name,
          Block: dataset.block,
          ReleaseDate: new Date(dataset.releaseDate + ' 00:00:00')
        }
        return boost;
      })
    }).finally(() => {
      this.currentStep = 1;
      this.ngxUiLoaderService.stop()
    })
  }

  onSelectBooster(boost: Booster) {
    this.listCards = new Array<Card>();
    this.ngxUiLoaderService.startLoader("loader-booster");
    this.onSetBooster(boost.Code.toLowerCase());
  }

  onSetBooster(code: string, listboost: any = []) {
    this.apirequestService.SetsBooster(code).then((data: any) => {
      let list = data.cards.map((dataset: any) => {
        let find = dataset.types.find((type: string) => {
          return type.toLowerCase().indexOf("creature") >= 0;
        })
        if (find) return dataset;
      }).filter((f: any) => { return f != undefined })
      listboost.push(...list);
    }).catch((error) => {
      this.currentStep = 4;
      this.ngxUiLoaderService.stopLoader("loader-booster")
    }).finally(() => {
      if (this.currentStep == 4) return;
      if (listboost.length < 30) this.onSetBooster(code, listboost);
      else {
        this.listCards = listboost.splice(0, 30).map((boost: any) => {
          let card: Card = {
            Name: boost.name,
            Text: boost.text,
            ColorIdentity: boost.text,
            ImageUrl: boost.imageUrl,
            ManaCost: boost.manaCost,
          };
          return card;
        })
        this.currentStep = 2;
        this.ngxUiLoaderService.stopLoader("loader-booster")
      }
    })
  }

}
