import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from 'src/app/auth.guard';
import { SecretariaComponent } from './secretaria.component';

const routes: Routes = [
  {
    path: 'secretaria',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin', 'gestor', 'consulta'] },
    children: [

      // 🖨️ Central de Impressões
      {
        path: 'impressoes',
        component: SecretariaComponent,
        data: { roles: ['admin', 'gestor', 'consulta'] }
      },

      // 🔁 Rota padrão
      { path: '', redirectTo: 'impressoes', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }
