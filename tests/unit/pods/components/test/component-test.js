import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';
import createComponent from 'glimmer-unit-test/tests/helpers/create-component';

module('Unit | Component | test', function(hooks) {
  setupTest(hooks);

  test('should calculate the value', async function(assert) {
    let model = { value: 4 };
    let component = createComponent('component:test', { model });
    assert.equal(component.valueSquared, 16);

    model.value = 3;
    assert.equal(component.valueSquared, 9);
  });
});
