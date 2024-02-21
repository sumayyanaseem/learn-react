// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import List from './components/list_plain';
import ListKey from './qcomps/list_keys_id'
import Recipe from './qcomps/recipes';
import State from './qcomps/state';
import StateObj from './components/stateObj'
import Stuckform from './qcomps/stuckForm';
import ThankYouCrash from './qcomps/thankYouCrash';
import Snapshot from './components/snapshot2';
import Queueupdates from './components/queueUpdates'
import Shoppingcart from './qcomps/shoppingCart'
export default function Home() {
  return (
    <div className={styles.main}>
                       <ListKey/>
                      <Recipe/>
                      <State/>
                      <StateObj/>
                      <Stuckform/>
                      <ThankYouCrash/>
                      <Snapshot/>
                      <Queueupdates/>
                      <Shoppingcart/>
    </div>
  )
}
