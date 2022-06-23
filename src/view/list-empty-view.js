import AbstractView from '../framework/view/abstract-view.js';
import { FilterType } from '../const.js';

const ListEmptyType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now'
};
const createListEmptyTemplate = (filterType) => {
  const listEmptyValue = ListEmptyType[filterType];

  return (
    `<p class="trip-events__msg">${listEmptyValue}</p>`
  );
};

export default class ListEmptyView extends AbstractView {
  #filterType = null;

  constructor(filterType) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createListEmptyTemplate(this.#filterType);
  }

}
