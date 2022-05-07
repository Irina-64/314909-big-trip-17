import AbstractView from './abstract-view.js';

const createTripEventsListComponentTemplate = () => ('<li class="trip-events__item"> </li>');

export default class TripEventsListComponent extends AbstractView {

  get template() {
    return createTripEventsListComponentTemplate();
  }
}
