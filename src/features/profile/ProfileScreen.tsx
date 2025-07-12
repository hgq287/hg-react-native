import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useSelector } from 'react-redux';
import { selectUser } from '@redux/slices/userSlice';

import { colors, fonts } from '@styles';

const profilePic = require('@assets/images/profile-pic.png');
const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>

      </View>

      <Image
        source={profilePic}
        style={styles.profilePic}
      />

      <Text style={styles.name}>Hg Q.</Text>
      <Text style={styles.username}>@hgq287</Text>
      <Text style={styles.bio}>
        Mobile App Solutions Architect & Open Source Enthusiast
      </Text>

      <Option icon={<Ionicons name="lock-closed-outline" size={20} />} label="Privacy" />
      <Option icon={<Ionicons name="time-outline" size={20} />} label="Purchase History" />
      <Option icon={<MaterialIcons name="help-outline" size={20} />} label="Help & Support" />
      <Option icon={<Ionicons name="settings-outline" size={20} />} label="Settings" />
    </ScrollView>
  );
};

const Option = ({ icon, label }) => (
  <TouchableOpacity style={styles.option}>
    <View style={styles.optionContent}>
      {icon}
      <Text style={styles.optionText}>{label}</Text>
    </View>
    <Icon name="chevron-right" size={20} color="#999" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 0,
    alignItems: 'center',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    marginTop: 84,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '70%',
    marginVertical: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  username: {
    color: '#888',
    marginBottom: 5,
  },
  bio: {
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#444',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ProfileScreen;