import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  const isLocalhost = window.location.hostname === 'localhost';

  // 🧠 Alterna automaticamente entre local e produção
  const keycloakUrl = isLocalhost
    ? 'http://localhost:8081' // Keycloak local
    : 'https://keycloak-production-c192.up.railway.app'; // Keycloak em produção

  const redirectUri = window.location.origin; // Detecta automaticamente o domínio atual

  return () =>
    keycloak.init({
      config: {
        url: keycloakUrl,
        realm: 'sibre',
        clientId: 'frontend-sibre'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        pkceMethod: 'S256',
        redirectUri: redirectUri,
        silentCheckSsoRedirectUri: redirectUri + '/assets/silent-check-sso.html'
      }
    });
}
