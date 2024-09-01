import paypal from '@paypal/checkout-server-sdk';
import { NextResponse } from 'next/server';
import dotenv from'dotenv';
dotenv.config();

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT;

const env = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(env);

export async function POST() {
    try {
        const request = new paypal.orders.OrdersCreateRequest();
        request.requestBody({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "100.00",
                        breakdown: {
                            item_total: {
                                currency_code: "USD",
                                value: "100.00",
                            },
                        },
                    },
                    items: [
                        
                    ],
                },
            ],
        });

        const response = await client.execute(request);
        if (!response || !response.result || !response.result.id) {
            throw new Error('Error inesperado en la creación de la orden');
        }

        return NextResponse.json({
            id: response.result.id,
        });
    } catch (error) {
        console.error('Error al crear la orden en PayPal:', error);
        return NextResponse.json({ error: 'Error al crear la orden en PayPal' }, { status: 500 });
    }
}
