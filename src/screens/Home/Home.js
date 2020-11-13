import React, { FC, useState } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Here we should list all pokemon items.</Text>
    </View>
  );
};

export default Home;
