import { moduleFor, test } from 'ember-qunit';

moduleFor('route:quickfiles', 'Unit | Route | quickfiles', {
    needs: ['service:session', 'service:currentUser'],
});

test('it exists', function(assert) {
    const route = this.subject();
    assert.ok(route);
});
