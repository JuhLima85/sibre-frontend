import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { APP_NAME, APP_VERSION } from 'src/app/shared/config/version';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: any;   
  isSidebarVisible: boolean = true; 
  appName = APP_NAME;
  appVersion = APP_VERSION;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
  }

  logout(){
    this.authService.encerrarSessao();
    this.router.navigate(['/login'])
  }
 
  hideSidebar(): void {
    this.isSidebarVisible = false;
}

baixarChamada() {
  window.open(environment.apiUrlBase + '/secretaria/pdf/chamada', '_blank');
}

baixarQrCode() {
  window.open(environment.apiUrlBase + '/secretaria/pdf/qrcode', '_blank');
}

baixarPlacaPreferencial() {
  window.open(environment.apiUrlBase + '/secretaria/pdf/placa', '_blank');
}

baixarRegimentoInterno() {
  window.open(environment.apiUrlBase + '/secretaria/pdf/regimento', '_blank');
}

baixarCertificadoMebro() {
  window.open(environment.apiUrlBase + '/secretaria/pdf/certificado', '_blank');
}
}
