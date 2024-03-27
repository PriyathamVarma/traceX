/*
 * Interface representing the data structure for provider profile data.
 * This interface defines the shape of the data expected when submitting a provider profile form.
 *
 * @property userId - The unique identifier of the provider.
 * @example "12345"
 *
 * @property userName - The name of the provider.
 * @example "John Doe"
 *
 * @property role - The role of the provider, either "provider" or "supplier".
 * @example "provider"
 *
 * @property email - The email address of the provider.
 * @example "john@example.com"
 *
 * @property from - The starting date of the provider's service.
 * @example new Date("2024-02-08")
 *
 * @property to - The ending date of the provider's service.
 * @example new Date("2024-02-15")
 *
 * @property status - The status of the provider, either "accepted", "invited", or "declined".
 * @example "accepted"
 */
export default interface IProvider {
  userId: string;
  userName: string;
  role: "provider" | "supplier";
  email: string;
  from: Date;
  to: Date;
  status: "accepted" | "invited" | "declined";
}
