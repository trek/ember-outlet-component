import Ember from 'ember';
import Resolver from 'ember-resolver';

const { computed } = Ember;

export default Resolver.extend({
  moduleNameLookupPatterns: computed(function(){
    let defaults = this._super(...arguments);
    return [this.outletComponents].concat(defaults);
  }),
  outletComponents(parsedName) {
    let { prefix, fullNameWithoutType } = parsedName;

    if (parsedName.type === 'controller') {
      return `${prefix}/components/${fullNameWithoutType}-outlet`
    } else {
      return undefined;
    }
  }
});