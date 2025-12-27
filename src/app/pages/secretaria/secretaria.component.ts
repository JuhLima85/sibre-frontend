import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent {

  // Lista para alimentar os cards
  documentos = [
  { id: 1, titulo: 'Lista de Presença', icone: 'assignment', path: 'chamada', descricao: 'Gerar lista para chamada.' },
  { id: 2, titulo: 'QR Code - Pix', icone: 'qr_code', path: 'qrcode', descricao: 'Exportar QR Code da Igreja.' },
  { id: 3, titulo: 'Placa Preferencial', icone: 'event_seat', path: 'placa', descricao: 'Imprimir placas de reserva.' },
  { id: 4, titulo: 'Regimento Interno', icone: 'gavel', path: 'regimento', descricao: 'Baixar regimento em PDF.' },
  { id: 5, titulo: 'Certificado Membro', icone: 'card_membership', path: 'certificado', descricao: 'Imprimir certificado.' },
  { id: 6, titulo: 'Pacto de Comunhão', icone: 'handshake', path: 'pacto', descricao: 'Imprimir pacto de comunhão.' },
  { id: 7, titulo: 'Modelo de Boletim', icone: 'feed', path: 'boletim', descricao: 'Baixar modelo de boletim.' }
];

  constructor() { }

  baixar(id: number) {  
  const doc = this.documentos.find(d => d.id === id);

  if (doc && doc.path) {
    const url = `${environment.apiUrlBase}/secretaria/pdf/${doc.path}`;
    window.open(url, '_blank');
  } else {
    console.error('Documento ou caminho não encontrado para o ID:', id);
  }
}
}