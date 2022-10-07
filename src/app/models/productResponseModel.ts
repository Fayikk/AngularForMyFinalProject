import { ProductComponent } from "../component/product/product.component";
import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface productResponseModel extends ResponseModel{
    data:Product[],
    
}