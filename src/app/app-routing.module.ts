import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';



const routerOptions: ExtraOptions = {
  relativeLinkResolution: 'legacy',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};




// @ts-ignore
const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

  { path: 'top', loadChildren: () => import('./pages/home/top/top.module').then(m => m.TopModule) },

  { path: 'about', loadChildren: () => import('./pages/home/about/about.module').then(m => m.AboutModule) },

  { path: 'MenuPublic', loadChildren: () => import('./pages/home/menu/menu-public/menu-public.module').then(m => m.MenuPublicModule) },

  { path: 'MenuOwner', loadChildren: () => import('./pages/home/menu/menu-owner/menu-owner.module').then(m => m.MenuOwnerModule) },

  { path: 'MenuItem', loadChildren: () => import('./pages/home/menu/menu-item/menu-item.module').then(m => m.MenuItemModule) },

  { path: 'HomeNotFound', loadChildren: () => import('./pages/home/home-not-found/home-not-found.module').then(m => m.HomeNotFoundModule) },

  { path: 'WhyUs', loadChildren: () => import('./pages/home/why-us/why-us.module').then(m => m.WhyUsModule) },

  { path: 'features', loadChildren: () => import('./pages/home/features/features.module').then(m => m.FeaturesModule) },

  { path: 'PopularCourses', loadChildren: () => import('./pages/home/popular-courses/popular-courses.module').then(m => m.PopularCoursesModule) },

  { path: 'trainer', loadChildren: () => import('./pages/home/trainer/trainer.module').then(m => m.TrainerModule) },

  { path: 'developer', loadChildren: () => import('./pages/home/child-pages/developer/developer.module').then(m => m.DeveloperModule) },

  { path: 'MenuDeveloper', loadChildren: () => import('./pages/home/menu/menu-developer/menu-developer.module').then(m => m.MenuDeveloperModule) },

  { path: 'Admin', loadChildren: () => import('./pages/home/child-pages/admin/admin.module').then(m => m.AdminModule) },

  { path: 'banking', loadChildren: () => import('./pages/home/child-pages/banking/banking.module').then(m => m.BankingModule) },

  // tslint:disable-next-line:max-line-length
  { path: 'LoadingSpinner', loadChildren: () => import('./shared/loading-spinner/loading-spinner.module').then(m => m.LoadingSpinnerModule) },

  { path: 'Student', loadChildren: () => import('./pages/home/child-pages/student/student.module').then(m => m.StudentModule) },

  { path: 'MenuStudent', loadChildren: () => import('./pages/home/menu/menu-student/menu-student.module').then(m => m.MenuStudentModule) },

  { path: 'header', loadChildren: () => import('./pages/header/header.module').then(m => m.HeaderModule) },

  { path: 'AosTest', loadChildren: () => import('./pages/home/aos-test/aos-test.module').then(m => m.AosTestModule) },
  // { path: 'auth', loadChildren: () => import('./pages/home/auth/auth.module').then(m => m.AuthModule) },
  // { path: '404', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  // { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
