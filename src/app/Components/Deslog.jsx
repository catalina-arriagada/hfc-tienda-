'use client'
import { useRouter } from 'next/navigation';

const Deslog = () => {
    const router = useRouter();
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      // Verificar si hay una sesión activa antes de eliminar el token
      if (token) {
        // Si hay una sesión activa, la cerramos
        localStorage.removeItem('token');
        // Limpia las cookies si existen
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        alert('Sesión cerrada exitosamente.');
        router.push('/login'); // Redirige a la página de login
      } else {
        // Si no hay una sesión activa, mostramos una alerta
        alert('No existe una sesión abierta.');
        router.push('/login');
      }
    }
}

export default Deslog;