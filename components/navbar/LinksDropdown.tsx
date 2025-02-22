


import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu'
 import { Links } from '@/utils/Links'
import Link from 'next/link';

export default function LinksDropdown() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild >
          <Button variant='outline' className='flex gap-4 max-w-[100px]'>
              <LuAlignLeft className='w-6 h-6' />
          </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40' align='start'> 
        {Links.map((link)=>{
          return <DropdownMenuItem key={link.label}>
            <Link  href={link.herf} className=' w-full capitalize'>{link.label}</Link>
          </DropdownMenuItem>
        })}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}