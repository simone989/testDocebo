import React from 'react';
import { Image } from 'react-native';

const Thumbnail = ({ url }) => (
  <Image
source={{ uri: url }} {/* Load image from url */}
    resizeMode="contain"
    style={{ width: 100, marginLeft: 10, flex: 1 }}
  />
);

export default Thumbnail;
