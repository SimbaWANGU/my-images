import React from 'react'
import GridDiv from '../../components/GridDiv'
import { photos1, photos2, photos3, photos4, photos5 } from '../../assets/exports'

const TryOut = () => {
  const styles = {
    container: 'bg-weird-blue text-white h-full w-full grid grid-flow-row-dense grid-cols-8 grid-rows-8 cursor-pointer',
    div1: 'col-span-4 row-span-4',
    div2: 'col-span-4 row-span-4',
    div3: 'col-span-2 row-span-2 ',
    div4: 'col-span-2 row-span-2',
    div5: 'col-span-2 row-span-2',
    div6: 'col-span-2 row-span-2',
    div7: 'col-span-2 row-span-2',
    div8: 'col-span-2 row-span-2',
    div9: 'col-span-2 row-span-2',
    div10: 'col-span-2 row-span-2',
  }

  return (
    <div id='tryout' className={styles.container}>
      <GridDiv className={styles.div1} photos={photos1} classes={''} div={''} />
      <GridDiv className={styles.div3} photos={photos3} classes={''} div={''} />
      <GridDiv className={styles.div4} photos={photos4} classes={''} div={''} />
      <GridDiv className={styles.div5} photos={photos5} classes={''} div={''} />
      <GridDiv className={styles.div6} photos={photos1} classes={''} div={''} />
      <GridDiv className={styles.div7} photos={photos2} classes={''} div={''} />
      <GridDiv className={styles.div8} photos={photos3} classes={''} div={''} />
      <GridDiv className={styles.div2} photos={photos2} classes={''} div={''} />
      <GridDiv className={styles.div9} photos={photos4} classes={''} div={''} />
      <GridDiv className={styles.div10} photos={photos5} classes={''} div={''} />
    </div>
  )
}

export default TryOut