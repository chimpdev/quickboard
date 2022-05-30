/**
   * @class QuickBoard
   * @author foup#0001 
   * @param {number} options.max How many items to return in leaderboard
   * @param {Array} options.data Data the leaderboard is based on
   * @param {function} options.map How you want the leaderboard items to display
   * @param {boolean} options.reverse true or false
   * 
*/
declare class QuickBoard {
    constructor(options: {
        max: number,
        data: Array<T>,
        map: (...args: any[]) => void,
        reverse: boolean = false
    }) {
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

    /**
     * @public
     * Returns learboard string
     * 
     * **Example Output:**
     * ```ssh-session
     * 1. Discord#0000 23245 messages
     * 2. Discord#0000 7754 messages
     * 3. Discord#0000 3576 messages
     * 4. Discord#0000 2256 messages
     * 5. Discord#0000 1123 messages
     * ```
     */
    create(): string {
        return this.init();
    };

    /**
     * @private
     * Initializes the the leaderboard creation
     */
    init(): string {
        if (this.get('reverse')) return this.template().split('\n').reverse().join('\n');
        else return this.template();
    };

    /**
     * @private
     * Formats data created on new QuickBoard()
     * @returns string
     */
    template() {
        return this.get('data').slice(0, this.get('max')).sort(this.get('sort')).map(this.get('map')).join('\n');
    };

    /**
     * @private
     * @param {string} key Index to search for in class 'QuickBoard'
     * @returns this[key]
     */
    get(key: string) {
        return this[key];
    };

    /**
     * @private
     * @param {string} key Index to search for in class 'QuickBoard'
     * @param {string | Array | number | boolean | ((...args: any[]) => void)} value New value for said 'index'
     * @returns {any} New value
     */
    set(key: string, value: string | Array | number | boolean | ((...args: any[]) => void)): any {
        return this[key] = value;
    };
};

export default QuickBoard;