/**
 * Created by BlisS on 06/04/17.
 */
export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '/';
}

