export default function(items, filters) {
  return items.filter(item => Object.keys(item).every(
    key => (
      !filters.hasOwnProperty(`${key}-min`) ||
      filters[`${key}-min`] === '' ||
      parseFloat(filters[`${key}-min`]) <= item[key]
    ) && (
      !filters.hasOwnProperty(`${key}-max`) ||
      filters[`${key}-max`] === '' ||
      parseFloat(filters[`${key}-max`]) >= item[key]
    )
  ))
}