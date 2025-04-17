// This API route is intentionally disabled. All Resend-related code has been removed.
// The contact form should use Formspree or another client-side solution.

export async function POST(req) {
  return new Response(JSON.stringify({ error: 'Not implemented' }), {
    status: 501,
    headers: { 'Content-Type': 'application/json' },
  });
}

