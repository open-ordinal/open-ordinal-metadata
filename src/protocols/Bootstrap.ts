/**
 * This interface defines the Options used for Open Ordinal Bootstrap.
 * 
 * @category Protocols
 */
export interface Bootstrap {
	/**
	 * The mode for bootstrap. Mode 0 is obmitted due to the default and would
	 * lead to a recursive deadlock.
	 */
	mode: BootstrapMode;
	/**
	 * Optional: The inscription Id to bootstrap
	 */
	id?: number;
	/**
	 * Optional: The sat Id to bootstrap
	 */
	sat?: number;
	/**
	 * Optional: Index on sat to bootstrap
	 */
	index?: number;
	/**
	 * Optional: Data to pass into the bootstrap
	 */
	data?: any;
	/**
	 * Optional: Additional inscriptions to load and pass into `bootstrap()`
	 */
	res?: { [_: string]: BootstrapResource };
	/**
	 * Optional: Additional Open Ordinal modules to load
	 */
	oo?: BootstrapOpenOrdinalModules;
}

/**
 * @category Bootstrap
 */
export interface BootstrapResource {
	/**
	 * Optional: The inscription Id to include
	 */
	id?: string;
	/**
	 * Optional: The sat Id to include
	 */
	sat?: number;
	/**
	 * Optional: Index on sat to bootstrap
	 */
	index?: number;
}

/**
 * @category Bootstrap
 */
export interface BootstrapOpenOrdinalModules {
	/**
	 * Option to load Open Ordinal API
	 */
	api?: boolean;
}

/**
 * Bootstap Mode
 * 
 * @category Bootstrap
 */
export enum BootstrapMode {
	/**
	 * Load Inscription Directly by Id and Boot
	 */
	LoadByInscriptionIdAndBoot = 1,
	/**
	 * Load Inscription via Id and then via it's SAT and fetch Latest and Boot
	 */
	LoadLatestByInscriptionIdAndBoot = 2,
	/**
	 * Load specified index via SAT and Boot
	 */
	LoadIndexBySatAndBoot = 3,
	/**
	 * Load Latest Inscription via SAT and Boot
	 */
	LoadLatestBySatAndBoot = 4,
}
