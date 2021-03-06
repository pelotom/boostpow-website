import { createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromMain from '@main/reducers/main.reducer';
import * as fromRoot from '@app/reducers';

export interface MainState {
  main: fromMain.State;
}

export const reducers: ActionReducerMap<MainState> = {
  main: fromMain.reducer
};


export const mainTreeSelector = (state: fromRoot.State) => state.main.main;

export const getBoostJob = createSelector(
  mainTreeSelector,
  (state: fromMain.State) => state.job
);


export const getBoostJobs = createSelector(
  mainTreeSelector,
  (state: fromMain.State) => state.jobs
);


export const getBoostJobUtxos = createSelector(
  mainTreeSelector,
  (state: fromMain.State) => state.jobUtxos
);

export const getBoostSearchResults = createSelector(
  mainTreeSelector,
  (state: fromMain.State) => state.boostSearchResults
);


