import { DataTypes, Model } from 'sequelize';
// Nota: Ahorita nos va a marcar error en la línea de abajo porque no hemos creado la conexión
import sequelize from '../config/database'; 

class Product extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DOUBLE
  },
  stock: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Product'
});

export default Product;