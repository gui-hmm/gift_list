import { Injectable } from '@angular/core';
import { db } from '../firebase';
import { collection, onSnapshot, query, doc, updateDoc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Gift } from '../models/gift.model';

@Injectable({ providedIn: 'root' })
export class GiftsService {
  private colName = 'gifts';

  getAll(): Observable<Gift[]> {
    const q = query(collection(db, this.colName));
    return new Observable<Gift[]>((observer) => {
      const unsub = onSnapshot(q, (snapshot) => {
        const arr = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as Gift[];
        observer.next(arr);
      }, (err) => observer.error(err));
      return unsub;
    });
  }

  async reserveGift(id: string, buyer: { name: string; phone: string; companions?: string[] }) {
    const docRef = doc(db, this.colName, id);
    await updateDoc(docRef, {
      status: 'taken',
      buyerName: buyer.name,
      buyerPhone: buyer.phone,
      buyerCompanions: buyer.companions || []
    } as any);
  }

  async createMany(gifts: Gift[]) {
    for (const g of gifts) {
      const id = g.id || g.name.replace(/\s+/g, '-').toLowerCase();
      const docRef = doc(db, this.colName, id);
      await setDoc(docRef, { ...g, id } as any);
    }
  }

  async updateGift(id: string, patch: Partial<Gift>) {
    const docRef = doc(db, this.colName, id);
    await updateDoc(docRef as any, patch as any);
  }
}
