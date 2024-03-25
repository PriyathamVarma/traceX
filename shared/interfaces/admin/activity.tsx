/*
 * Interface representing the data structure for carbon emission data activity.
 * This interface defines the shape of the data expected when submitting a form
 *
 * @property activity - The specific activity generating emissions.
 * @example "gaseous fuels", "liquid fuels", "solid fuels", or "biofuel"
 *
 * @property category - The specific activity generating emissions.
 * @example "fuel","UK electricity"
 */
export default interface ICarbonEmissionDataActivity {
  activity: string;
  category: string;
}
