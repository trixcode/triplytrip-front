
import { Field, reduxForm } from 'redux-form';

import './listingPriceSegmentation.scss'

const ListingPriceSegmentation = (props) => {
  const { handleSubmit } = props

  return (
    <div className='price-segmentation'>
      <h3 className='price-segmentation__title'>price segmentation</h3>
      <form
        className='price-segmentation-forms'
        onSubmit={handleSubmit}>
        <div className='price-segmentation-form'>
          <label className='price-segmentation-form__title'>segmentation</label>
          <div >
            <Field 
              name="categories" 
              component="select" 
              className='price-segmentation-form__input'>
              <option value="KGS">KGS</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </Field>
          </div>
        </div>
        <div className='price-segmentation-form'>
          <label className='price-segmentation-form__title'>minimum price</label>
          <div >
            <Field
              className='price-segmentation-form__input '
              name="min-price"
              component="input"
              type="number"
            />
          </div>
        </div>
        <div className='price-segmentation-form'>
          <label className='price-segmentation-form__title'>maximum price</label>
          <div >
            <Field
              className='price-segmentation-form__input'
              name="max-price"
              component="input"
              type="namber"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'simple'
})(ListingPriceSegmentation);