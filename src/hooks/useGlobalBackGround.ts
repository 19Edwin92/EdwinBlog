import {useEffect} from 'react'
import { useRecoilState } from "recoil"
import { globalBackground } from "../libs/recoil/globalBackground"

export const useGlobalBackGround = (info:string):void => {
  const [,setBackground] = useRecoilState(globalBackground)
  useEffect(() => {
    setBackground(info)
  },[setBackground,info])
}