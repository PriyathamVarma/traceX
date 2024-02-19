/*
 * Interface representing the data structure for carbon emission data type.
 * This interface defines the shape of the data expected when submitting a form.
 *
 * @property type - The type of emission data .
 * @example "Butane","CNG","LNG".
 */
export default interface ICarbonEmissionDataType {
  type: string;
}
