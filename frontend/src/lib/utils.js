export const formatDate = (date) => {
return date.toLocalDateString("en-US", {
  month:"short",
  day:"numeric",
  year:"numeric"
})
}