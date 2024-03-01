import  express  from "express";
import { UserController } from "./controllers/UserController";
import { getAllProduct, createProduct, deleteProduct, getByIdProduct, updateProduct } from './controllers/productController';
import { productMiddleware } from "./middlewares/productMiddleware";
import { authMiddleware } from './middlewares/authMiddleware';

const routes = express.Router();

routes.post("/users/create", UserController.create);
routes.post("/users/login", UserController.login);

routes.use(authMiddleware);
// routes.get("/profile", UserController.getProfile);

// route.get("/products", getAllProduct);
// route.post("/products",  productMiddleware.create, createProduct);
// route.delete("/products", deleteProduct);
// route.get("/products", getByIdProduct);
// route.put("/products", productMiddleware.updateProduct, updateProduct);

export default routes;
