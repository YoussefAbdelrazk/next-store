
import { FaHeart } from 'react-icons/fa'
import { Button } from '../ui/button'

export default function FavoriteToggleButton({productId}:{productId:string}) {
  return (
    <Button size='icon'>
    <FaHeart/>
</Button>
)
  
}