
import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constant';
import { addItem } from '../../REDUX/cartSlice';
const CategoryItem=({card})=>{
    const dispatch=useDispatch()
    const handleButton=(item)=>{
        dispatch(addItem(item));
    }
   
    
    
    return(<div className="p-4 m-4">
        {card.map((c)=>(<div  className=" cursor-pointer p-2 m-4 border-gray-200 border-b-2 text-left flex" key={c.card.info.id}>
           
            <div className=' p-2 m-2 w-9/12'><span className="text-left">{c.card.info.name}-₹{c.card.info.price/100}</span>
            <p className="text-sm">{c.card.info.description}</p>
            </div>
            <div className='w-3/12 p-4'>
             <div  className=' absolute'>
             <button onClick={()=>handleButton(c)} className='mx-8 rounded-md
             
             lg shadow-sm text-green-500 font-bold size-10 bg-white w-20 bg-center'>ADD+</button>
             </div>
             <img src={CDN_URL+c.card.info.imageId}/>
             

             </div>
             </div>))}
    </div>);
};
export default CategoryItem;