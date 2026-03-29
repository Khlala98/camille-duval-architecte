export function verifyAdmin(request: Request): boolean {
  const secret = request.headers.get("x-admin-secret");
  return secret === process.env.API_ADMIN_SECRET;
}
