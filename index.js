<reference types="typescript" />

class QuickBoard {

  /**
   * @author can#0002
   * @param options {Object}
   * @param options.max {Number}
   * @param options.data {Array}
   * @param options.map {Function}
   * @param options.reverse {Boolean}
   * @returns {String}
   */

  constructor(options) {
    if (!options) throw new Error('options is required.');
    if (!options.max) throw new Error('options.max is required.');
    if (!options.data) throw new Error('options.data is required.');
    if (!options.map) throw new Error('options.map is required.');
    if (!options.sort) throw new Error('options.sort is required.');

    if (typeof options.max !== 'number') throw new Error('options.max must be a number.');
    if (!Array.isArray(options.data)) throw new Error('options.data must be an array.');
    if (typeof options.map !== 'function') throw new Error('options.map must be a function.');
    if (typeof options.sort !== 'function') throw new Error('options.sort must be a function.');
    if (options.reverse && typeof options.reverse !== 'boolean') throw new Error('options.reverse must be a boolean.');

    if (options.max < 1) throw new Error('options.max must be greater than 0.');
    if (options.data.length < 1) throw new Error('options.data length must be greater than 0.');
    
    this.set('max', options.max);
    this.set('data', options.data);
    this.set('map', options.map);
    this.set('sort', options.sort);
    if (options.reverse) this.set('reverse', options.reverse);
  };

  create() {
    return this.init();
  };
  
  set(key, value) {
    return this[key] = value;
  };

  template() {
    return this.get('data').slice(0, this.get('max')).sort(this.get('sort')).map(this.get('map')).join('\n');
  };

  init() {
    if (this.get('reverse')) return this.template().split('\n').reverse().join('\n');
    else return this.template();
  };

  get(key) {
    return this[key];
  };
};

module.exports = QuickBoard;