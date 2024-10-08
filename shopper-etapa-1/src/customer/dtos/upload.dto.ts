import { IsBase64, IsDateString, IsIn, IsNotEmpty } from 'class-validator';

export class UploadDto {
  @IsBase64({}, { message: 'image deve ser base64 encoded' })
  @IsNotEmpty({ message: 'image deve ser preenchido' })
  image: string;

  @IsNotEmpty({ message: 'customer_code deve ser preenchido' })
  customer_code: string;

  @IsNotEmpty({ message: 'measure_datetime deve ser preenchido' })
  @IsDateString(
    {},
    { message: 'measure_datetime deve ser no formato ISO 8601 date string' },
  )
  measure_datetime: Date;

  @IsNotEmpty({ message: 'measure_type deve ser preenchido' })
  @IsIn(['WATER', 'GAS'], {
    message: 'measure_type deve ser igual a WATER ou GAS',
  })
  measure_type: 'WATER' | 'GAS';
}
