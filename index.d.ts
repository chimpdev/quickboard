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
        data: Array<any>,
        map: (...args: any[]) => void,
        sort: (...args: any[]) => void,
        reverse?: boolean
    });

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
    create(): string;

    /**
     * @private
     * Initializes the the leaderboard creation
     */
    init(): string;

    /**
     * @private
     * Formats data created on new QuickBoard()
     * @returns string
     */
    template(): string;

    /**
     * @private
     * @param {string} key Index to search for in class 'QuickBoard'
     * @returns {any} this[key]
     */
    get(key: string): any;

    /**
     * @private
     * @param {string} key Index to search for in class 'QuickBoard'
     * @param {string | Array | number | boolean | ((...args: any[]) => void)} value New value for said 'index'
     * @returns {any} New value
     */
    set(key: string, value: string | Array<any> | number | boolean | ((...args: any[]) => void)): any;
}

export default QuickBoard;