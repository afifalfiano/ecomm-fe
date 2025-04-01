import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./features/cart/cart.component').then(c => c.CartComponent)
    },
    {
        path: 'products-list/:id',
        loadComponent: () => import('./features/product-list/product-list.component').then(c => c.ProductListComponent)
    },
    {
        path: 'products/:id',
        loadComponent: () => import('./features/product-detail/product-detail.component').then(c => c.ProductDetailComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.component').then(c => c.ProfileComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then(c => c.ContactComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component').then(c => c.NotFoundComponent)
    },
];
