import { forwardRef, ForwardRefRenderFunction } from 'react';
import { 
  FormLabel, 
  FormControl, 
  Input as ChakraInput, 
  InputProps as ChakraInputProps
}  from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { FormErrorMessage } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<InputProps, HTMLInputElement> 
  = ({ name, label, error = null, ...rest} : InputProps, ref) => {
    return (
        <FormControl isInvalid={!!error}>
         { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}    
          <ChakraInput 
            id={name}
            name={name}            
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor:'gray.900'
            }}
            size="lg"
            ref={ref}
            {...rest}
          />
          { !!error && (
          <FormErrorMessage>
            { error.message }
          </FormErrorMessage>
          ) }
        </FormControl> 
    );
}
export const Input = forwardRef(InputBase);