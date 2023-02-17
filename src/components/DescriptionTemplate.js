import React from 'react'

function DescriptionTemplate({description, image, colorsPhone, colorsPhoneSecond, colorsPhoneThird}) {
  return (
    <div>
<p>{description}</p>
<img src={image} alt='description image' />
<div>
<img src={colorsPhone} alt='description image' />
<img src={colorsPhoneSecond} alt='description image' />
<img src={colorsPhoneThird} alt='description image' />

</div>
    </div>
  )
}

export default DescriptionTemplate