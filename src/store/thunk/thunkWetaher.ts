import getWether from '../../service/wetaher'
import { Loading,Succes ,Error} from '../slices/sliceWeather'
import { AppDispatch } from '../store'


 





  const getWetaher = () => {
     return async (dispatch: AppDispatch) => {
          let response = await getWether()
          dispatch(Loading())
          try {
               if(response.status === 200){
                    dispatch(Succes(response.data))
               }else{
                    dispatch(Error(response.data))
               }
          } catch (error) {
               console.log(error)
          }
     }
  }
export default getWetaher








