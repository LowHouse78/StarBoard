import { Routes } from '@angular/router';
import { LiveDataComponent } from './components/live-data/live-data';
import { HistoricalDataComponent } from './components/historical-data/historical-data';
import { SettingsComponent } from './components/settings/settings';

export const routes: Routes = [
    { path: '', redirectTo: '/live-data', pathMatch: 'full' },
    { path: 'live-data', component: LiveDataComponent },
    { path: 'historical-data', component: HistoricalDataComponent },
    { path: 'settings', component: SettingsComponent }
];