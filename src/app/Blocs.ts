export class Bloc {
  constructor(private _index?: number, private _astatus?: boolean, private _composant: any[] = []) {}

  get index(): number | undefined {
    return this._index;
  }

  set index(value: number | undefined) {
    this._index = value;
  }

  get astatus(): boolean | undefined {
    return this._astatus;
  }

  set astatus(value: boolean) {
    this._astatus = value;
  }

  public addComponent(avatar: any[]) {
    if (this._composant) {
      this._composant.push(avatar);
    } else {
      this._composant = [avatar];
    }
  }
}