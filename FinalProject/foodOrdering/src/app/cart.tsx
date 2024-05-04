import { View, Text, Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { useCart } from '@/providers/CartProviders';
import CartListItem from '@/components/CartListitem';
import Button from '@/components/Button';
import React from 'react'

const CartScreen = () => {
  const {items, total} = useCart();
  return (
    <View style={{padding:10}}>
      <FlatList data={items} renderItem={({item}) => <CartListItem cartItem={item}/>}
      contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <Text style={{marginTop: 20, fontSize: 20, fontWeight: '500'}}>
        Tatal: ${total}</Text>
      <Button text="Checkout"/>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen ;