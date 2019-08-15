/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
// import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram, faFacebook, faWhatsapp, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faImage, faTimes } from '@fortawesome/free-solid-svg-icons';
import Dropzone from 'react-dropzone';

import customInputField from '../CustomFields';
import { richEditor } from '../CustomEditor';
import './listingForm.scss';

const ListingForm = (props) => {
  const {
    handleSubmit, pristine, createListingStart, submitting,
  } = props;

  const [logoState, dropLogo] = useState(null);
  const [galleryState, dropMainImage] = useState(null);
  const [imageState, dropImages] = useState([]);

  const hotel = '5d53ecb0cff49159e366cb59';
  const restaurant = '5d53ecb0cff49159e366cb5d';
  const guestHouse = '5d53ecb0cff49159e366cb5a';
  const nightClub = '5d53ecb0cff49159e366cb5b';
  const hostel = '5d53ecb0cff49159e366cb5e';
  const chaihana = '5d53ecb0cff49159e366cb5f';
  const cafe = '5d53ecb0cff49159e366cb5c';

  const bishkek = '5d53ecb0cff49159e366cb52';
  const osh = '5d53ecb0cff49159e366cb53';
  const talas = '5d53ecb0cff49159e366cb56';
  const naryn = '5d53ecb0cff49159e366cb54';
  const karakol = '5d53ecb0cff49159e366cb55';
  const jalalAbad = '5d53ecb0cff49159e366cb58';
  const batken = '5d53ecb0cff49159e366cb57';

  const handleListingCreate = (formValues) => {
    const obj = {
      ...formValues,
      mainImage: logoState,
      images: imageState,
      galleryimage: galleryState,
    };
    createListingStart(obj);
  };
  // the handleDropImages add images to state dropImages from input for images
  const handleDropImages = images => dropImages(imageState.concat(...images));
  // the deletImage delete images from state imageState
  const deletImage = index => dropImages(imageState.filter(img => img.name !== imageState[index].name));
  // the socialsArray is array for creating social input
  const socialsArray = [faInstagram, faFacebook, faWhatsapp, faYoutube];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <form
      onSubmit={handleSubmit(handleListingCreate)}
      className="listing"
    >
      <div className="container">
        <div className="listing-wrapper">

          <div className="listing-location">
            <div className="listing-location-forms">
              <div className="listing-form">
                <span className="listing-form__title">Hазвание списка</span>
                <div>
                  <Field
                    className="listing-form__input"
                    name="name"
                    component={customInputField}
                    type="text"
                  />
                </div>
              </div>
              <div className="listing-form">
                <span className="listing-form__title">Список категорий</span>
                <div>
                  <Field
                    name="categoriesId"
                    component={customInputField}
                    autoComplete="on"
                    className="listing-form__input"
                    list="categoriesName"
                  />
                  <datalist id="categoriesName">
                    <option
                      className="listing-form__input__select__value"
                      value={hotel}
                    >
                      Отель
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={cafe}
                    >
                      Кафе
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={restaurant}
                    >
                      Ресторан
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={chaihana}
                    >
                      Чайхана
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={hostel}
                    >
                      Хостел
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={nightClub}
                    >
                      Ночной Клуб
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={guestHouse}
                    >
                      Гостевой Дом
                    </option>
                  </datalist>
                </div>
              </div>
              <div className="listing-form">
                <span className="listing-form__title">Местоположение</span>
                <div>
                  <Field
                    className="listing-form__input "
                    name="citiesId"
                    component={customInputField}
                    autoComplete="on"
                    list="citiesName"
                  />
                  <datalist id="citiesName">
                    <option
                      className="listing-form__input__select__value"
                      value={bishkek}
                    >
                      Бишкек
                    </option>
                    {/* <option
                      className="listing-form__input__select__value"
                      value={osh}
                    >
                      Ош
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={talas}
                    >
                      Талас
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={naryn}
                    >
                      Нарын
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={karakol}
                    >
                      Каракол
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={jalalAbad}
                    >
                      Джалал-Абад
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value={batken}
                    >
                      Баткен
                    </option> */}
                  </datalist>
                </div>
              </div>
              <div className="listing-form">
                <span className="listing-form__title">google адрес</span>
                <div>
                  <Field
                    className="listing-form__input"
                    name="address"
                    component={customInputField}
                    type="text"
                    placeholder="Listing address"
                  />
                </div>
              </div>
            </div>
            <div className="listing-google-map">
              {/* <GoogleMapReact
                bootstrapURLKeys={{
                  key: '',
                  language: 'ru',
                  region: 'kg',
                }}
                defaultCenter={{
                  lat: 42.84,
                  lng: 74.56
                }}
                defaultZoom={11}>
              </GoogleMapReact> */}
            </div>
          </div>

          <div className="listing-forms-wrapper">
            <h3 className="listing__title">ценовой сегмент</h3>
            <div
              className="listing-row-inputs-forms"
              onSubmit={handleSubmit}
            >
              <div className="listing-row-inputs-form">
                <span className="listing-form__title">сегментация</span>
                <div>
                  <Field
                    name="segmentation"
                    component={customInputField}
                    className="listing-form__input"
                    autoComplete="on"
                    list="curencyName"
                  />
                  <datalist id="curencyName">
                    <option
                      className="listing-form__input__select__value"
                      value="KGS"
                    >
                      сом
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value="USD"
                    >
                      доллар
                    </option>
                    <option
                      className="listing-form__input__select__value"
                      value="EUR"
                    >
                      евро
                    </option>
                  </datalist>
                </div>
              </div>
              <div className="listing-row-inputs-form">
                <span className="listing-form__title">минимальная цена</span>
                <div>
                  <Field
                    className="listing-form__input"
                    name="minPrice"
                    component={customInputField}
                    type="number"
                  />
                </div>
              </div>
              <div className="listing-row-inputs-form">
                <span className="listing-form__title">максимальная цена</span>
                <div>
                  <Field
                    className="listing-form__input"
                    name="maxPrice"
                    component={customInputField}
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="listing-forms-wrapper">
            <span className="listing-form__title">логотип</span>
            <Dropzone
              multiple={false}
              noClick={!!logoState}
              accept="image/*"
              onDrop={logoFile => dropLogo(logoFile)}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  className="listing-image-load listing-image-load__logo"
                  {...getRootProps()}
                >
                  <span
                    role="presentation"
                    onClick={() => dropLogo(null)}
                    style={{ display: !logoState ? 'none' : 'flex' }}
                    className="listing-image__logo__icon_delet"
                  >
                    <FontAwesomeIcon
                      className="listing-image__files__icon_delet"
                      icon={faTimes}
                    />
                  </span>
                  <input
                    className="listing__drop__input"
                    name="mainImage"
                    {...getInputProps()}
                  />
                  {logoState
                    && (
                      <img
                        src={URL.createObjectURL(logoState[0])}
                        alt="logo"
                        className="listing-image__logo"
                      />
                    )}
                  <FontAwesomeIcon
                    style={{ display: logoState ? 'none' : 'flex' }}
                    className="listing-image__logo__icon"
                    icon={faImage}
                  />
                </div>
              )}
            </Dropzone>

            <span className="listing-form__title">основное изображение</span>
            <Dropzone
              multiple={false}
              noClick={!!galleryState}
              accept="image/*"
              onDrop={logoFile => dropMainImage(logoFile)}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  className="listing-image-load listing-image-load__logo"
                  {...getRootProps()}
                >
                  <span
                    role="presentation"
                    onClick={() => dropMainImage(null)}
                    style={{ display: !galleryState ? 'none' : 'flex' }}
                    className="listing-image__logo__icon_delet"
                  >
                    <FontAwesomeIcon
                      className="listing-image__files__icon_delet"
                      icon={faTimes}
                    />
                  </span>
                  <input
                    className="listing__drop__input"
                    name="logoDrop"
                    {...getInputProps()}
                  />
                  {galleryState
                    && (
                      <img
                        src={URL.createObjectURL(galleryState[0])}
                        alt="logo"
                        className="listing-image__logo"
                      />
                    )}
                  <FontAwesomeIcon
                    style={{ display: galleryState ? 'none' : 'flex' }}
                    className="listing-image__logo__icon"
                    icon={faImage}
                  />
                </div>
              )}
            </Dropzone>

            <span className="listing-form__title">изображение</span>
            <Dropzone
              accept="image/*"
              onDrop={images => handleDropImages(images)}
            >
              {({ getRootProps, getInputProps }) => (
                <div className="listing-featured-image">
                  {imageState.length > 0 && imageState.map((file, index) => (
                    <div
                      key={index.id}
                      className="listing-image__files"
                    >
                      <span
                        role="presentation"
                        onClick={() => deletImage(index)}
                        className="listing-image__logo__icon_delet"
                      >
                        <FontAwesomeIcon
                          className="listing-image__files__icon_delet"
                          icon={faTimes}
                        />
                      </span>
                      <img
                        src={URL.createObjectURL(file)}
                        alt="hotel"
                        className="listing-image__files__file"
                      />
                    </div>
                  ))}
                  <div
                    {...getRootProps()}
                    className="listing-featured__icon__wrapper"
                  >
                    <input
                      className="listing__drop__input"
                      name="images"
                      {...getInputProps()}
                    />
                    <FontAwesomeIcon
                      className="listing-image__files__icon "
                      icon={faImage}
                    />
                    <span className="listing-featured-image__text">Featured Image</span>
                  </div>
                </div>
              )}
            </Dropzone>
          </div>

          <div className="listing-forms-wrapper">
            <h3 className="listing__title">Содержание списка</h3>
            <div className="listing-form">
              <span className="listing-form__title">Краткое описание</span>
              <Field
                className="listing-content__wysiwyg listing-content__wysiwyg_short"
                name="extraDescription"
                component={richEditor}
              />
            </div>
            <div className="listing-form">
              <span className="listing-form__title">Полное описание</span>
              <Field
                className="listing-content__wysiwyg listing-content__wysiwyg"
                name="description"
                component={richEditor}
              />
            </div>
          </div>

          <div className="listing-forms-wrapper">
            <h3 className="listing__title">Информация о списке</h3>
            <span className="listing__information__text">
              Пропустите этот шаг, если вы хотите отобразить информацию о своем профиле.
            </span>
            <div className="listing-information">
              <div className="listing-row-inputs-forms">
                <div className="listing-row-inputs-form">
                  <span className="listing-form__title">Телефон</span>
                  <div>
                    <Field
                      className="listing-form__input"
                      name="phone"
                      component={customInputField}
                      type="number"
                    />
                  </div>
                </div>
                <div className="listing-row-inputs-form">
                  <span className="listing-form__title">Вебсайт</span>
                  <div>
                    <Field
                      className="listing-form__input"
                      name="website"
                      component={customInputField}
                      type="text"
                    />
                  </div>
                </div>
                <div className="listing-row-inputs-form">
                  <span className="listing-form__title">Электронная почта</span>
                  <div>
                    <Field
                      className="listing-form__input"
                      name="email"
                      component={customInputField}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="listing-social">
                {socialsArray.map(iconIndex => (
                  <div
                    key={iconIndex.iconName}
                    className="listing-social-wrapper"
                  >
                    <span className="listing-form__title">{iconIndex.iconName}</span>
                    <div className="listing-social-form">
                      <span className="listing-social__icon__wrapper">
                        <FontAwesomeIcon
                          className={`listing-social__icon listing-social__icon__${iconIndex.iconName}`}
                          icon={iconIndex}
                        />
                      </span>
                      <Field
                        className="listing-form__input"
                        name={iconIndex.iconName}
                        component={customInputField}
                        type="text"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="listing-forms-wrapper">
            <h3 className="listing__title">Купон</h3>
            <div className="listing-row-inputs-forms">
              <div className="listing-row-inputs-form">
                <span className="listing-form__title">Описание</span>
                <div>
                  <Field
                    className="listing-form__input"
                    name="couponDescription"
                    component={customInputField}
                    type="text"
                  />
                </div>
              </div>
              <div className="listing-row-inputs-form">
                <span className="listing-form__title">Код купона</span>
                <div>
                  <Field
                    className="listing-form__input"
                    name="couponCode"
                    component={customInputField}
                    type="text"
                  />
                </div>
              </div>
              <div className="listing-row-inputs-form">
                <span className="listing-form__title">реферальная ссылка</span>
                <div>
                  <Field
                    className="listing-form__input"
                    name="referralLink"
                    component={customInputField}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="listing-preview">
            <button
              type="submit"
              className="listing-preview__button"
              disabled={pristine || submitting}
            >
              Отправить
            </button>
          </div>

        </div>
      </div>
    </form>
  );
};

ListingForm.propTypes = {
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  createListingStart: PropTypes.func.isRequired,
};

export default ListingForm;
