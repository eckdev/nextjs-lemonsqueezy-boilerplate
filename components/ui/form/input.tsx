import React, { FC } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '.'
import { Input } from '../input';

type Props = {
    control: any;
    placeholder?: string;
    label?: string;
    name: string
    type: string
}

const FormInput:FC<Props> = ({control,name,label,placeholder,type}) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage className="pt-2 sm:text-sm" />
      </FormItem>
    )}
  />
  )
}

export default FormInput