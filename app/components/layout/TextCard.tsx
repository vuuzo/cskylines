export const TextCard = ({children}:{children:React.ReactNode}) => { 
  return (
    <div className={`
    flex flex-col items-center text-center py-12 col-[1/-1]
  `}>
    { children }
  </div>
  )
}