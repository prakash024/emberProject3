import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function(i){
    return `Category ${i}`;
  },
  addon_ids: [1,2,3,4],
  description: function(i){
    return `Category for ${i}`;
  }
});
