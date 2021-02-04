import React, { InputHTMLAttributes } from 'react';

import {
  Container,
  ContainerInput,
  Input,
  AreaIconSearch,
  IconSearch,
} from './styles';

interface PropsInputSeach extends InputHTMLAttributes<HTMLInputElement> {
  isActive: boolean;
  functionOnClikIcon(): void;
}

const InputSeach: React.FC<PropsInputSeach> = ({
  functionOnClikIcon,
  isActive,
  ...rest
}) => {
  return (
    <>
      {isActive ? (
        <Container>
          <ContainerInput>
            <Input {...rest} />
          </ContainerInput>
          <AreaIconSearch>
            <IconSearch
              onClick={() => {
                functionOnClikIcon();
              }}
            />
          </AreaIconSearch>
        </Container>
      ) : null}
    </>
  );
};

export default InputSeach;
