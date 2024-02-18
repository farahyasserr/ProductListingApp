import React from 'react'
import { HomeStackPropsType } from '../../navigation/Home/HomeStack';
import UpdateProductView from './UpdateProductScreen.view';
import { updateProduct } from '../../store/reducers/ProductsSliceReducer';
import Product from '../../types/Product';
import { useDispatch } from 'react-redux';

interface Props {}

interface Props extends HomeStackPropsType<'UpdateProduct'>{}


function UpdateProductScreen({route, navigation}: Props) {
    const dispatch  = useDispatch();

    const productItem = route.params?.productItem;

    const handleSubmitButton = (updatedProduct: Product) => {
        dispatch(updateProduct(updatedProduct));
        navigation.goBack();
    }

    return (
        <UpdateProductView product={productItem} handleSubmitButton={handleSubmitButton}/>
    )
}

export default UpdateProductScreen
