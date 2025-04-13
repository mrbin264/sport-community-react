/**
 * Checks if the current path is an authentication path
 * @param path Current path
 * @returns True if it's an auth path
 */
export function isAuthPath(path: string): boolean {
  // List of paths that should use AuthLayout
  const authPaths = [
    "/sign-in",
    "/sign-up",
    "/forgot-password",
    "/password-change",
    "/confirm-email",
    "/confirm-new-email",
  ];

  // Remove language prefix if present, e.g., /en/sign-in -> /sign-in
  const normalizedPath = path.replace(/^\/[a-z]{2}(-[a-z]{2})?/, "");

  // Check if the path starts with any auth path
  return authPaths.some(
    (authPath) =>
      normalizedPath === authPath || normalizedPath.startsWith(`${authPath}/`)
  );
}
