import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { clearCart } from "../../REDUX/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleclick=()=>{
        dispatch(clearCart());
    }
    return (
        <div>
            <h1 className="text-center text-3xl mt-5"> My Cart</h1>
            
            <div className="w-6/12 m-auto">
            <button onClick={handleclick} className="bg-black text-white p-2 rounded-lg ">clear cart</button>
             {cartItems.length===0
                 && <h1>your cart is empty add something</h1>}
            <CategoryItem card={cartItems}/>
                
            </div>
        </div>
    );
};
export default Cart;