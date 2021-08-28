// ** React Imports
import { Fragment } from 'react'

// ** Import Custom Components
import CaruselSection from './CarouselSection'

import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'

const HomePage = () => {
  return (
    <Fragment>
      <div className='mb-2'>
        <CaruselSection />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create Awesome</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>This is your second page.</CardText>
          <CardText>
            Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes.
            Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create Awesome</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>This is your second page.</CardText>
          <CardText>
            Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes.
            Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
          </CardText>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default HomePage
