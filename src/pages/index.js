// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bios from './qcomps/bios'
import TodoList from './qcomps/todos'
import Gallery from './qcomps/gallery_props'
import Holder from './components/square'
import PackingList from './qcomps/props_item'
export default function Home() {
  return (
    <div className={styles.main}>
               <Profile/>
              <MyComp/>
              <Bios/>
              <TodoList/>
              <Gallery/>
              <Holder/>
              <PackingList/>
    </div>
  )
}
