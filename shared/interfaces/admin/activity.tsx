/*
 * Interface representing the data structure for carbon emission data activity.
 * This interface defines the shape of the data expected when submitting a form
 *
 * @property activity - The specific activity generating emissions.
 * @example "gaseous fuels", "liquid fuels", "solid fuels", or "biofuel"

 */
export default interface ICarbonEmissionDataActivity {
  activity: string;
}
