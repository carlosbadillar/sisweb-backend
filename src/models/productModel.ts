import { DataTypes, Model } from 'sequelize';
import { connection } from '../connection/connection'; 

export class Product extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
}

Product.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
  discountPercentage: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.INTEGER },
  stock: { type: DataTypes.INTEGER }
}, {
  sequelize: connection, 
  modelName: 'Product',
  tableName: 'Products'
});

export default Product;