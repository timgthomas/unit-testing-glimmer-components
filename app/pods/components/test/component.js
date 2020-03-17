import Component from '@glimmer/component';

export default class extends Component {
  get valueSquared() {
    return this.args.model.value ** 2;
  }
}
