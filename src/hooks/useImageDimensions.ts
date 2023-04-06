/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {  useState } from "react";
import { Dimensions } from "../@types";
import {  Dimensions as RNDimensions } from "react-native";

const windowDimensions = RNDimensions.get('window')


const useImageDimensions = ()=> {
  const [dimensions, setDimensions] = useState<Dimensions>({width:windowDimensions.width, height:windowDimensions.height});


  return [dimensions,setDimensions] as const
};

export default useImageDimensions;
