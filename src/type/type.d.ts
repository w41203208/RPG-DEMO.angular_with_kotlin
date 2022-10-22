interface Equipment {
  id: number;
  name: string;
  type: string;
  attribute: string;
  value: number;
}

interface BagItem {
  id: string;
  equipment: Equipment;
}

interface User {
  id: string;
  name: string;
  bodySlot: Equipment | null;
  handSlot: Equipment | null;
  userBag: Array<BagItem>;
}

interface State {
  def: number;
  atk: number;
}

type SlotType = 'hand_slot' | 'body_slot';
