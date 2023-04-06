/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";
import { Animated, GestureResponderEvent, Image, ViewStyle,StyleProp,GestureResponderHandler, ImageStyle } from "react-native";
import { ImageSource } from "../../@types";


export declare type ImageItemType = {
  uri: ImageSource;
}


export type ImageItemProps = {
  item: ImageItemType;
  onRequestClose: () => void;
  onZoom: (isZoomed: boolean) => void;
  onLongPress: (image: ImageSource) => void;
  delayLongPress: number;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
  renderCustomComponent:({item,onLoad,style,panHandlers} :{item:ImageItemType,onLoad:(width:number, height:number) => 
    void,  
     panHandlers?:GestureResponderHandler,
     style: any
  }) =>React.ReactElement
};

declare const _default: React.MemoExoticComponent<({
  imageSrc,
  onZoom,
  onRequestClose,
  onLongPress,
  delayLongPress,
  swipeToCloseEnabled,
}: ImageItemProps) => JSX.Element>;

export default _default;
