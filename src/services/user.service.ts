import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.URL + '/user';
  private user!: User;
  private state: State = {
    def: 0,
    atk: 0,
  };

  constructor(private http: HttpClient) {}

  setUser(input: User): void {
    this.user = input;
    // sessionStorage.setItem('user', JSON.stringify(input));
    // sessionStorage.setItem('state', JSON.stringify(this.state));
  }

  getUser(): User {
    return this.user;
  }

  getState(): State {
    this.updateState();
    return this.state;
  }
  setUserBag(bag: Array<BagItem>) {
    this.user.userBag = bag;
  }

  putEquipmentInBag(equipment: Equipment, id: string): void {
    this.user.userBag.push({
      equipment: equipment,
      id: id,
    });
  }
  deleteEquipmentInBag(id: string): void {
    this.user.userBag = this.user.userBag.filter((item) => item.id !== id);
  }

  updateState(): void {
    let body = this.user.bodySlot;
    if (body !== null) {
      (this.state as any)[body.attribute.toLowerCase()] = body.value;
    }
    let hand = this.user.handSlot;
    if (hand !== null) {
      (this.state as any)[hand.attribute.toLowerCase()] = hand.value;
    }
  }

  mountedEquipment(equipment: Equipment): void {
    if (equipment.type === 'Armor') this.user.bodySlot = equipment;
    if (equipment.type === 'Weapon') this.user.handSlot = equipment;
  }

  unMountedEquipment(equipment: Equipment | SlotType): void {
    if (typeof equipment === 'string') {
      if (equipment === 'body_slot') this.user.bodySlot = null;
      if (equipment === 'hand_slot') this.user.handSlot = null;
    } else {
      if (equipment.type === 'Armor') this.user.bodySlot = null;
      if (equipment.type === 'Weapon') this.user.handSlot = null;
    }
  }

  mountedEquipmentAPI(uid: string, bid: string): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/mountedEquipment`, {
      uid: uid,
      bid: bid,
    });
  }

  unmountedEquipmentAPI(uid: string, slotType: string): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/unMountedEquipment`, {
      uid: uid,
      slotType: slotType,
    });
  }

  buyEquipmentAPI(uid: string, eid: number): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/addItemInUserBag`, {
      uid: uid,
      eid: eid,
    });
  }
}
