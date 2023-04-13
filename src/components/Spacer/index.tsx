import React from "react";

import * as S from "./styles";

type Props = {
  flex?: number;
  height?: number;
  width?: number;
};

const Spacer = ({ height, width, flex }: Props) => {
  return <S.StyledSpacer height={height} width={width} flex={flex} />;
};

export default Spacer;
