import { Injectable } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Actions, createEffect, ofType } from '@ngrx/effects'; //Todo
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Item List] Load items'),
      mergeMap(() =>
        this.showCaseSvc.getDataApi().pipe(
          map((items) => ({ type: '[Item List] Loaded success', items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private showCaseSvc: ShowCaseService
  ) {}
}
