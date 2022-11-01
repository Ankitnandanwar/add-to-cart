export const reducer = (state, action) =>{
    if(action.type==="REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((currElem)=>{
                return currElem.id !== action.payload;
            })
        }
    }


    if (action.type==="CLEAR_CART"){
        return{
            ...state,
            item:[]
        }
    }

    if(action.type==="INCREMENT"){
            let updatedCart = state.item.map((CurrElm)=>{
                if(CurrElm.id===action.payload){
                    return{...CurrElm, quantity: CurrElm.quantity+1}
                }
                return CurrElm;
            })
            return{...state, item:updatedCart}
    }

    if(action.type==="DECREMENT"){
        let updatedCart  = state.item.map((CurrElem)=>{
            if(CurrElem.id===action.payload){
                return{...CurrElem, quantity:CurrElem.quantity-1}
            }
            return CurrElem;
        }).filter((curElem)=>{
            return curElem.quantity !== 0
        })
        return{...state, item:updatedCart}
    }


    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { price, quantity } = curVal;
    
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem += quantity;
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        return { ...state, totalItem, totalAmount };
      }
    return state;
}