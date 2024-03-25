/*
 * Interface representing the data structure for carbon emission data category.
 * This interface defines the shape of the data expected when submitting a form.
 *
 * @property category - The emission category (fuel, bioenergy, or refrigerant).
 * @example "fuel", "bioenergy", or "refrigerant"
 *
 * @property scope - The scope of the category
 * @example 1 or 2 or 3
 */
export default interface ICarbonEmissionDataCategory {
  category: string;
  scope: string;
}
