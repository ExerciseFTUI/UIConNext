import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Slot, usePathname, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const InitialLayout = () => {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (!isLoaded) return;
    const inTabsGroup = segments[0] === "(main)";

    console.log("User changed: ", isSignedIn);

    if (isSignedIn && !inTabsGroup) {
      router.replace("/main");
    } else if (!isSignedIn) {
      router.replace("/onboarding");
    }
  }, [isSignedIn]);

  // If the user is signed in, user cant go to login or signup page
  useEffect(() => {
    if (path == "/signup" || path == "/login") {
      if (isSignedIn) {
        router.replace("/main");
      }
    }
  }, [path]);

  return <Slot />;
};

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
};

export default RootLayout;
