import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
  @tracked value = 6;

  get valueSquared() {
    return this.value ** 2;
  }
}
