

function WordCount({textvalue}) {



  return (
    <div className="flex justify-between items-center gap-2 text-[#868686] text-[14px]">
         <div className="item-blk pr-[10px] border-r-1"> <h6>Word Count : <span className="text-white">{textvalue ? textvalue.trim().split(/\s+/).length : "0"}</span></h6> </div>
         <div className="item-blk pr-[10px] border-r-1"> <h6>Charecther Count : <span className="text-white">{textvalue ? textvalue.trim().length : "0"}</span></h6> </div>
         <div className="item-blk pr-[10px] border-r-1"> <h6>Line Count : <span className="text-white">{textvalue.trim() ? textvalue.trim().split(/\s+/).length : "0"}</span></h6> </div>
    </div>
  )
}

export default WordCount
