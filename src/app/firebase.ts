import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { environment } from '../environments/environment';

if (!getApps().length) {
  initializeApp(environment.firebase);
}

export const db = getFirestore();
export const auth = getAuth();
