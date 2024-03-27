/*
 * Interface representing the data structure for provider profile data.
 * This interface defines the shape of the data expected when submitting a provider profile form.
 *
 * @property userId - The unique identifier of the provider.
 * @example "12345"
 *
 * @property mainUserId - The unique identifier of the main user associated with the provider.
 * @example "67890"
 *
 * @property mainUserName - The name of the main user associated with the provider.
 * @example "Jane Doe"
 *
 * @property category - The category of the provider's service, e.g., "Fuel".
 * @example "Fuel"
 *
 * @property scope - The scope of the provider's service, e.g., "1", "2", or "3".
 * @example "1"
 *
 * @property activity - The activity related to the provider's service, e.g., "Gaseous Fuel".
 * @example "Gaseous Fuel"
 *
 * @property type - The type of service provided by the provider, e.g., "Butane".
 * @example "Butane"
 *
 * @property units - The units in which the service is measured, e.g., "tonnes".
 * @example "tonnes"
 *
 * @property totalConsumption - The total consumption of the service provided by the provider.
 * @example 100
 *
 * @property methodology - The methodology used by the provider.
 * @example "Methodology A"
 *
 * @property verification - The verification process used by the provider, e.g., "self-verification".
 * @example "self-verification"
 */
export default interface IDataByProvider {
  userId: string;
  mainUserId: string;
  mainUserName: string;
  category: string; // Fuel
  scope: string; // 1 or 2 or 3
  activity: string; // Gaseous Fuel
  type: string; // Butane
  units: string; // tonnes
  totalConsumption: number;
  methodology: string;
  verification: string; // self-verification
  from: Date;
  to: Date;
}
