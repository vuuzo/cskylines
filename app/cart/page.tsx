import Link from "next/link"
import Button from "../components/elements/Button"
import Container from "../components/layout/Container"
import { BigHeading } from "../components/layout/Headings"

const Cart = () => {
  return (
    <div className="bg-white text-black flex-1">
      <Container>
        <div className="col-[1/-1] uppercase font-semibold tracking-widest mt-[2rem]">
          <Link href={'/'} className="py-1 block">Continue Shopping</Link>
        </div>
        <div className="col-[1/-1] flex flex-col items-center justify-center py-[4rem] h-full gap-6">
        
        <svg className="scale-[1.8] mb-4 [transform-origin:top_left]" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill-rule="evenodd"><path d="m1.447 2.106 2.383 1.19L4.66 6h17.683l-3.6 12H6.261L2.17 4.703.553 3.894l.894-1.788ZM19.656 8H5.277l2.461 8h9.518l2.4-8Z" fill-rule="nonzero"></path><circle cx="8.5" cy="20.5" r="1.5"></circle><circle cx="16.5" cy="20.5" r="1.5"></circle></g>
        </svg>

          <BigHeading>Your cart is empty</BigHeading>
          <p className="text-center max-w-[270px] sm:max-w-none">Have a look at our games to add items to your cart.</p>
          <Button className="bg-black mt-4 text-white border-black text-xs px-4 py-3 min-h-0 hover:bg-white hover:border-black hover:text-black transition-colors">
            <span>Go to all games</span>
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Cart