import { Routes } from '@angular/router';
import { LiveData } from './components/live-data/live-data';
import { HistoricalData } from './components/historical-data/historical-data';
import { Settings } from './components/settings/settings';

export const routes: Routes = [
    { path: '', redirectTo: '/live-data', pathMatch: 'full' },
    { path: 'live-data', component: LiveData },
    { path: 'historical-data', component: HistoricalData },
    { path: 'settings', component: Settings }
];