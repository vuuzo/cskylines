export const formatDate = (date: string) => {
  const newDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(date))
  return newDate
}