// Mock implementation of useAuth for a pure frontend project.
// All backend-related tRPC and authentication logic has been removed.

import { useCallback, useMemo } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  // Add other user properties if needed for the frontend UI
};

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

export function useAuth(options?: UseAuthOptions) {
  // Mock user data for demonstration
  const mockUser: User = {
    id: "mock-user-123",
    name: "Frontend User",
    email: "user@example.com",
  };

  const state = useMemo(() => {
    return {
      user: mockUser, // Always "authenticated" with mock user
      loading: false,
      error: null,
      isAuthenticated: true,
    };
  }, []);

  const logout = useCallback(async () => {
    console.log("Mock logout executed. In a real app, this would clear session/tokens.");
    // In a real app, you might want to clear the mock user state here
  }, []);

  const refresh = useCallback(() => {
    console.log("Mock refresh executed.");
    // In a real app, this would re-fetch user data
  }, []);

  // Note: The redirect logic is removed as it's tied to the backend's auth flow.

  return {
    ...state,
    refresh,
    logout,
  };
}




// === Example usage of useAuth in a component ===