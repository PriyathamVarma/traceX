/*
 * Interface representing the data structure for carbon emission data.
 * This interface defines the shape of the data expected when submitting a form.
 *
 * @property scope - The scope of the emission data (1, 2, or 3).
 * @example 1, 2, or 3
 *
 * @property category - The emission category (fuel, bioenergy, or refrigerant).
 * @example "fuel", "bioenergy", or "refrigerant"
 *
 * @property activity - The specific activity generating emissions.
 * @example "gaseous fuels", "liquid fuels", "solid fuels", or "biofuel"
 *
 * @property type - The type of emission data .
 * @example "Butane","CNG","LNG".
 *
 * @property units - The units of the emission value.
 * @example "tonnes", "litres", "kWh (Net CV)", or "kWh (Gross CV)"
 *
 * @property value - The numerical value of the emissions.
 * @example 123 | 123.00 (integer)
 */
export default interface ICarbonEmissionData {
  scope: 1 | 2 | 3;
  category: string;
  activity: string;
  type: string; // Replace with your specific type options
  units: string;
  value: number;
}
