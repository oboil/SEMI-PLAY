import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

// Firebase Admin이 이미 초기화되어 있지 않은 경우에만 초기화
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
}

export const storage = getStorage();
