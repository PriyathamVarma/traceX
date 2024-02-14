/*
 * Interface representing the data structure for user profile data.
 * This interface defines the shape of the data expected when submitting a user profile form.
 *
 * @property name - The name of the user.
 * @example "John Doe"
 *
 * @property email - The email address of the user.
 * @example "john@example.com"
 *
 * @property password - The password of the user.
 * @example "password123"
 */
export default interface IUserProfile {
  name?: string;
  email: string;
  password?: string;
}
