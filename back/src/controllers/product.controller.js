import Product from "../models/product.model.js";
import Company from "../models/company.model.js";
import { deleteImageCloudinary, uploadImage } from "../utils/cloudinary.js";

// ? Octoner un producto
export const getProduct = async (req, res) => {
  const { id, companyId } = req.params;
  if (!id || !companyId)
    return res.status(400).json({ message: "Petición Incorrecta" });
  try {
    const product = await Product.findById(id);
    if (!product)
      return res.status(400).json({ message: "Producto no encontrado" });

    if (product.company.valueOf() !== companyId)
      return res.status(400).json({ message: "Producto no encontrado" });

    res.status(200).send(product);
  } catch (error) {
    console.error(error);
    res.send().status(500);
  }
};

// ? Octener todos los productos de una compañia
export const getProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.find({ company: id });
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.send().status(500);
  }
};

//? Crear Producto
export const createProduct = async (req, res) => {
  const {
    name,
    price,
    quantity,
    description,
    category,
    currency,
    company,
    image,
  } = req.body;

  try {
    const FoundCompany = await Company.findById(company);
    if (!FoundCompany)
      return res.status(404).json({ message: "La compañia no existe" });

    const imageClodinary = await uploadImage(image);

    const newProduct = new Product({
      name,
      price,
      quantity,
      category,
      description,
      currency,
      company,
      image: {
        url: imageClodinary.url,
        public_id: imageClodinary.public_id,
      },
    });
    await newProduct.save();
    res.status(201).json({ message: "Producto Creado Exitosamente" });
  } catch (error) {
    console.error(error);
    res.send().status(500);
  }
};

//? eliminar una producto
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    let currentProduct = await Product.findById(id);

    if (!currentProduct) return res.status(400).json("No existe el producto");
    let imgCloudinary = currentProduct.image.public_id;

    if (imgCloudinary) {
      await deleteImageCloudinary(imgCloudinary);
    }
    const productDelete = await Product.findByIdAndDelete(id);

    res.status(200).send(`${productDelete.name} eliminado exitosamente`);
  } catch (error) {
    console.error(error);
    res.send().status(500);
  }
};

// ? Actualizar un producto
const updateData = (currentProduct, newData) => {
  const data = { ...newData };
  if (currentProduct.name !== newData.name) {
    data.name = newData.name;
  }
  if (currentProduct.description !== newData.description) {
    data.description = newData.description;
  }
  if (currentProduct.image.url !== newData.image) {
    data.image = newData.image;
  }
  if (currentProduct.category !== newData.category) {
    data.category = newData.category;
  }
  if (currentProduct.price !== newData.price) {
    data.price = newData.price;
  }
  if (currentProduct.currency !== newData.currency) {
    data.currency = newData.currency;
  }
  if (currentProduct.quantity !== newData.quantity) {
    data.quantity = newData.quantity;
  }
  return data;
};
export const editProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    image,
    category,
    price,
    currency,
    quantity,
    company,
  } = req.body;
  const currentProduct = await Product.findById(id);
  if (!currentProduct)
    return res.status(400).json("Product not found in Data Base");
  const data = updateData(currentProduct, {
    name,
    description,
    image,
    category,
    price,
    currency,
    quantity,
    company,
  });
  const imgCloudinaryDB = currentProduct.image.url;
  try {
    if (currentProduct.image.url !== image) {
      await deleteImageCloudinary(imgCloudinaryDB);
      const uploadImageCloudinary = await uploadImage(image);
      data.image = uploadImageCloudinary;
    }
    const uploadProduct = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });
    return res.status(200).send(`Producto ${uploadProduct.name} actualizado`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

