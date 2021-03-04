export default function getYearsOfExperience() {
  const yearsExperience =
    (new Date().getTime() - 1494831600000) / (1000 * 365 * 60 * 60 * 24);

  return Math.round(yearsExperience * 2) / 2;
}
