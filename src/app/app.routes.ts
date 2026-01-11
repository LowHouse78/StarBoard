import { Routes } from '@angular/router';
import { Oneview } from './components/oneview/oneview';
import { HistoricalDataViewComponent } from './components/historical-data-view/historical-data-view';
import { SettingsviewComponent } from './components/settingsview/settingsview';

export const routes: Routes = [
    { path: '', redirectTo: '/oneview', pathMatch: 'full' },
    { path: 'oneview', component: Oneview },
    { path: 'historical-data', component: HistoricalDataViewComponent },
    { path: 'settings', component: SettingsviewComponent }
];