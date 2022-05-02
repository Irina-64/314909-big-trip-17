import {
  createElement
} from '../render.js';

const createEventDetailsTemplate = () => ('<section class="event__details"></section>');

export default class EventDetails {
  getTemplate() {
    // eslint-disable-next-line indent
    return createEventDetailsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
