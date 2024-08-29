// app/api/login/route.js
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { LoginUser } from '@/lib/actions/register-user';
export async function POST(request) {
    const { email, password } = await request.json();

    // Authenticate user and get token from your authentication service
    const token = await LoginUser(email, password);
    console.log("TOKEN HERE",token);
    if (token) {
        // Set the token in a HTTP-only cookie
        const response = NextResponse.json({ success: true });
        response.headers.set('Set-Cookie', serialize('token', token, {
            httpOnly: true,
            secure: false, // Set to true in production
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: 'strict',
            path: '/', // Accessible across the entire site
        }));
        return response;
    } else {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
}