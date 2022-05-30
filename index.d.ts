/**
   * @author foup#0001 
   * @param {number} options.max How many items to return in leaderboard
   * @param {Array} options.data Data the leaderboard is based on
   * @param {function} options.map How you want the leaderboard items to display
   * @param {function} options.sort How you want the leaderboard items to be sorted
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
     * ```
     * "1. Jane#0000 - 12345 Messages\n2. John#0000 - 567 Messages"
     * ```
     */
    public create(): string;
    /**
     * @private
     * Initializes the the leaderboard creation
     */
    private init(): string;

    /**
     * @private
     * Formats data created on new QuickBoard()
     * @returns string
     */
    private template(): string;

    /**
     * @private
     * @param {string} key Index to search for in class 'QuickBoard'
     * @returns {any} this[key]
     */
    private get(key: string): any;

    /**
     * @private
     * @param {string} key Index to search for in class 'QuickBoard'
     * @param {string | Array | number | boolean | ((...args: any[]) => void)} value New value for said 'index'
     * @returns {any} New value
     */
    private set(key: string, value: string | Array<any> | number | boolean | ((...args: any[]) => void)): any;
}

export = QuickBoard;