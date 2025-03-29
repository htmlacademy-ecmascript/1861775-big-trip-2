import Observable from '../framework/observable.js';
import { UpdateType } from '../const.js';

export default class OffersModel extends Observable {
  #pointsApiService = null;
  #offers = [];

  constructor({ pointsApiService }) {
    super();
    this.#pointsApiService = pointsApiService;
  }


  async init() {
    try {
      this.#offers = await this.#pointsApiService.offers;
    } catch (error) {
      this.#offers = [];
    }
    this._notify(UpdateType.INIT);
  }

  //Получим данные из свойства offers
  get offers() {
    return this.#offers;
  }
}
