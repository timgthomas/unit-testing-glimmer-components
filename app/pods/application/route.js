import Route from '@ember/routing/route';

export default class extends Route {
  model() {
    return { value: 13 };
  }
}
