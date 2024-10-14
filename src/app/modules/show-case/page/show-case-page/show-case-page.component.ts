import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedItems, loadItems } from 'src/app/state/actions/items.actions';
import { selectLoading } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  listItems: ItemModel[] = [];
  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<any>,
    private showCaseSvc: ShowCaseService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadItems());
    this.showCaseSvc.getDataApi().subscribe((response: ItemModel[]) => {
      console.log('Items: ', response);
      this.store.dispatch(loadedItems({ items: response }));
    });
  }
}
