import { General } from "./General";
import { Health } from "./Health";
import { TxGenerator } from "./TxGenerator";
import { Util } from "./Util";
import { TxGeneratorAutomations } from "./TxGeneratorAutomations";
import { Client } from "./Client";

/**
 * HawkAPI is a central gateway class that aggregates access to various functional modules
 * for interacting with HawkSight's blockchain APIs. This class initializes and exposes modules
 * that manage different aspects of the blockchain interactions such as general utilities,
 * transaction generation, health checks, and automation services.
 * 
 * Each module connected through this class offers specialized APIs for different tasks,
 * making it easier to manage and use HawkSight's comprehensive blockchain features.
 */
export class HawkAPI {
  /** Health module to check system health and API connectivity. */
  public readonly health: Health;

  /** General module for basic blockchain operations like portfolio management, token information retrieval. */
  public readonly general: General;

  /** Util module for various utility functions that assist with blockchain interactions. */
  public readonly util: Util;

  /** TxGenerator module for creating and managing transactions on the blockchain. */
  public readonly txGenerator: TxGenerator;

  /** TxGeneratorAutomations module for automating and optimizing transaction creation processes. */
  public readonly txGeneratorAutomation: TxGeneratorAutomations;

  /**
   * Initializes a new instance of the HawkAPI class with a specified API URL.
   * @param url The base URL for the HawkSight API services, defaulted to "https://api2.hawksight.co" if not specified.
   */
  constructor(
    protected readonly url: string = "https://api2.hawksight.co",
  ) {
    const client = new Client(url);
    this.health = new Health(client);
    this.general = new General(client);
    this.util = new Util(client);
    this.txGenerator = new TxGenerator(client);
    this.txGeneratorAutomation = new TxGeneratorAutomations(client);
  }
}
