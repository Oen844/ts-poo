import { Category, AccesType } from "../models/category.model";
import { IsEnum, IsNotEmpty, IsUrl, Length, validate, validateOrReject } from 'class-validator';

export interface CreateCategoryDto extends Omit<Category, 'id'> {

}
export class CreateCategoryDto implements CreateCategoryDto {
  @IsNotEmpty()
  @Length(3, 30)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccesType)
  access?: AccesType | undefined;
}


(async () => {

  try {
    const dto = new CreateCategoryDto();
    dto.name = 'a';
    await validateOrReject(dto);
    console.log(dto);
  } catch (error) {
    console.log(error);
  }
})()


//
