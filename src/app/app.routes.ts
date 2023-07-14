import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full',
    },
	{
		path: 'intro',
		loadComponent: () => import('./pages/intro/intro.page').then( m => m.IntroPage)
	},
    {
    	path: 'home',
    	loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
    },
	{
		path: 'about',
		loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
	},
	{
		path: 'history',
		loadComponent: () => import('./pages/history/history.page').then( m => m.HistoryPage)
	},
	{
		path: 'teams',
		loadComponent: () => import('./pages/teams/teams.page').then( m => m.TeamsPage)
	},
	{
		path: 'team:id',
		loadComponent: () => import('./pages/team/team.page').then( m => m.TeamPage)
	},
	{
		path: 'contact',
		loadComponent: () => import('./pages/contact/contact.page').then( m => m.ContactPage)
	},
	{
		path: 'sponsors',
		loadComponent: () => import('./pages/sponsors/sponsors.page').then( m => m.SponsorsPage)
	},
	{
		path: 'blog',
		loadComponent: () => import('./pages/blog/blog.page').then( m => m.BlogPage)
	},
	{
		path: 'gallery',
		loadComponent: () => import('./pages/gallery/gallery.page').then( m => m.GalleryPage)
	}
];

