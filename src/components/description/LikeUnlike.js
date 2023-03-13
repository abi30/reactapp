import React from 'react'
import likeLogo from '../../assets/like.svg'
import unLikeLogo from '../../assets/unlike.svg'

export default function LikeUnlike() {
  return (
//    {/* <!-- like/unlike --> */}
   <div className="flex gap-10 w-48">
   <div className="flex gap-1">
       <div className="shrink-0">
           <img
               className="w-5 block"
            src={likeLogo}
               alt="Like"
           />
       </div>
       <div className="text-sm leading-[1.7142857] text-slate-600">
           100K
       </div>
   </div>
   <div className="flex gap-1">
       <div className="shrink-0">
           <img
               className="w-5 block"
               src={unLikeLogo}
               alt="Unlike"
           />
       </div>
       <div
           className="text-sm leading-[1.7142857] text-slate-600"
       >
           100K
       </div>
   </div>
</div>
  )
}
