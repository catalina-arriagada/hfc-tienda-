'use client';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import dotenv from'dotenv';
dotenv.config();

export default function Paypal() {
  return (
    <main>
      <div>
        <PayPalScriptProvider options={{
          "client-id": process.env.PAYPAL_CLIENT_ID,
          "disable-funding": "card,credit",
        }}>
          <PayPalButtons
            style={{ color: 'blue', layout: "horizontal" }}
            createOrder={async () => {
              try {
                const res = await fetch('/api/checkout', { method: "POST" });
                if (!res.ok) throw new Error('Error al crear la orden');
                const order = await res.json();
                if (!order.id) throw new Error('No se recibió un ID de orden');
                return order.id;
              } catch (error) {
                console.error('Error al crear la orden:', error);
                alert('Hubo un problema al crear la orden. Por favor, intenta nuevamente.');
                return null;
              }
            }}
            onApprove={(data, actions) => {
              console.log('Pago aprobado:', data);
              // Aquí puedes manejar la captura del pago
            }}
            onCancel={() => {
              console.log('Pago cancelado');
            }}
            onError={(err) => {
              console.error('Error en el pago:', err);
              alert('Hubo un problema con el pago. Por favor, intenta nuevamente.');
            }}
          />
        </PayPalScriptProvider>
      </div>
    </main>
  );
}
